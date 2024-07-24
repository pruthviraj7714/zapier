import SignInForm from "@/components/SignIn";
import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SigninPage = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/dashboard');
  }
  return <SignInForm />;
};

const SignIn = () => {
  return (
    <SigninPage />
  );
};

export default SignIn;
