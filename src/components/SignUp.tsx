import Form from "./styles/Form";

export default function SignUp() {
  return (
    <Form method="POST">
      <h2>Create your account</h2>
      <fieldset>
        <label htmlFor="fullname">
          Full Name
          <input
            type="name"
            name="fullname"
            placeholder="Your full name"
            autoComplete="name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            autoComplete="email"
          />
        </label>
        <label htmlFor="birthdate">
          Birth Date
          <input type="date" name="birthdate" autoComplete="birthdate" />
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
        <button type="submit">Sign Up</button>
      </fieldset>
    </Form>
  );
}
