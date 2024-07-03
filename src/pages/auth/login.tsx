import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";

import { userLogin } from "@/utils/apis/auth";
import { LoginSchema } from "@/utils/types/auth";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [body, setBody] = useState<LoginSchema>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      // const body = {
      //   email,
      //   password,
      // };
      const response = await userLogin(body);

      Cookies.set("token", response.payload.token);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Layout>
      <div className="m-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sign in to your account
          </h1>
          <p className="mt-2 text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full"
              required
              value={body.email}
              onChange={(e) =>
                setBody({
                  ...body,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full"
              required
              value={body.password}
              onChange={(e) =>
                setBody({
                  ...body,
                  password: e.target.value,
                })
              }
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            onClick={() => handleSubmit()}
          >
            Sign in
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
