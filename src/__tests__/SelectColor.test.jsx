import SelectColor from "../Elements/SelectColor";  
import {render, screen, fireEvent} from '@testing-library/react'
import { describe } from "vitest";

describe('tests Select a color', () => {
  
  test('changes color', () => {
    render(<SelectColor/>)
    fireEvent.change(screen.getByRole('combobox', {name: /select a color/i}), {target: {value: 'green'}})
    expect(screen.getByText(/green/i, {selector: 'span'})).toBeInTheDocument();
  })
})