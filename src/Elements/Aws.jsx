import { Component } from 'react';
import './../css/aws.css'
import axios from 'axios';
import { v4 as randomString } from 'uuid';
import Dropzone from 'react-dropzone';
import { GridLoader } from 'react-spinners';

class Aws extends Component {
  constructor() {
    super();
    this.state = {
      isUploading: false,
      url: 'http://via.placeholder.com/450x450',
    };
  }

  getSignedRequest = ([file]) => {
    this.setState({ isUploading: true });
    console.log("getSignedRequest", file);
    // We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
    const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;

    // We will now send a request to our server to get a "signed url" from Amazon. We are essentially letting AWS know that we are going to upload a file soon. We are only sending the file-name and file-type as strings. We are not sending the file itself at this point.
    axios
      .get('/api/sign-s3', {
        params: {
          'file-name': file.name,
          'file-type': file.type,
        },
      })
      .then(response => {
        const { signedRequest, url } = response.data;
        this.uploadFile(file, signedRequest, url);
      })
      .catch(err => {
        console.log(err);
      });
  };

  uploadFile = (file, signedRequest, url) => {
    console.log("uploadFile", signedRequest, file, url);
    const options = {
      headers: {
        'Content-Type': file.type,
      },
    };

    axios
      .put(signedRequest, file, options)
      .then(payload => {
        this.setState({ isUploading: false, url });
        console.log("payload", payload);
        axios
          .post(`/api/images/`, payload) // arrays of objects for for images and people
          .then(() => {
            // console.log("added candidate:", res);
            // navigate("/admin");
          })
          .catch((error) => {
            console.error(`Unable to add ${payload}`, error);
          });
          })
      .catch(err => {
        this.setState({
          isUploading: false,
        });
        if (err.response.status === 403) {
          alert(
            `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
              err.stack
            }`
          );
        } else {
          console.error("ERROR", err.status, err.stack);
          alert(`ERROR: ${err.status}\n ${err.stack}`);
        }
      });
  };

  render() {
    const { url, isUploading } = this.state;
    return (
      <div className="App">
        <h1>Upload</h1>
        <h1>{url}</h1>
        <img src={url} alt="" width="50px" />

        <Dropzone
          onDropAccepted={this.getSignedRequest}
          accept="image/*"
          multiple={false}>
          {({getRootProps, getInputProps}) => (
            <div 
              style = {{
              position: 'relative',
              width: 160,
              height: 80,
              borderWidth: 5,
              marginTop: 25,
              borderColor: 'gray',
              borderStyle: 'dashed',
              borderRadius: 5,
              display: 'inline-block',
              fontSize: 17,}}
              {...getRootProps()}>
              <input {...getInputProps()} />
              {isUploading ? <GridLoader /> : <p>Drop files here, or click to select files</p>}
            </div>
          )}
         </Dropzone>
      </div>
    );
  }
}

export default Aws;