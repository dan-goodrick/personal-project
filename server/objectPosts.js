import { Candidate } from "./model.js";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
import process from "process";

const serverFunctions = {
  stripeWebhook: async (request, response) => {
    let event = request.body;
    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    if (endpointSecret) {
      // Get the signature sent by Stripe
      const signature = request.headers["stripe-signature"];
      try {
        event = stripe.webhooks.constructEvent(
          request.body,
          signature,
          endpointSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return response.sendStatus(400);
      }
    }
    console.log(event.type);
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        const candidateId = session.metadata.data.id
        const previousFunds = session.metadata.data.funds
        const fundsRaised = previousFunds + session.amount_total/100
        Candidate.update({ fundsRaised }, { where: { candidateId } })
        .then(() => {
          console.log("updated funds Raised:");
        })
        .catch((error) => {
          console.error(`Unable to update donation ${candidateId}`, error);
        });
        // Then define and call a function to handle the event checkout.session.completed
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    // Return a 200 response to acknowledge receipt of the event
    response.status(200);
  }
};
export default serverFunctions;
