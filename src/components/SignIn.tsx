import Form from "./styles/Form";

export default function SignIn() {
  return (
    <Form method="POST">
      <h2>Sign in to your account</h2>
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            autoComplete="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Your password"
            autoComplete="password"
          />
        </label>
        <button type="submit">Sign In</button>
      </fieldset>
    </Form>
  );
}
