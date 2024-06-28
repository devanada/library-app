import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";

function Login() {
  return (
    <Layout>
      <div className="m-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sign in to your account
          </h1>
          <p className="mt-2 text-muted-foreground">
            Don't have an account?{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              Sign up
            </a>
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
            />
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
