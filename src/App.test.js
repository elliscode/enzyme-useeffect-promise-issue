import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  const { getByTestId, getByText } = render(<App />);
  await waitFor(() => { expect(getByText('State change title')).toBeInTheDocument() }, { timeout: 10000, interval: 1000 });
});
