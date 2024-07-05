import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { CustomFormField } from "@/components/custom-formfield";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import Layout from "@/components/layout";

import { LoginSchema, loginSchema } from "@/utils/types/auth";
import { useToken } from "@/utils/contexts/token";
import { userLogin } from "@/utils/apis/auth";

function Login() {
  const { changeToken } = useToken();
  const navigate = useNavigate();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
    try {
      const response = await userLogin(data);

      changeToken(response.payload.token);
      toast.success(response.message);
      navigate("/");
    } catch (error) {
      toast.error((error as Error).message);
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
        <Form {...form}>
          <form
            data-testid="form-login"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <CustomFormField control={form.control} name="email" label="Email">
              {(field) => (
                <Input
                  data-testid="input-email"
                  placeholder="johndoe@mail.com"
                  type="email"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                  {...field}
                />
              )}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              name="password"
              label="Password"
            >
              {(field) => (
                <Input
                  data-testid="input-password"
                  placeholder="Password"
                  type="password"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                  {...field}
                />
              )}
            </CustomFormField>
            <Button
              data-testid="btn-submit"
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            >
              Sign in
            </Button>
          </form>
        </Form>
      </div>
    </Layout>
  );
}

export default Login;
