import LoginForm from "@/components/forms/auth/LoginForm";

const LoginPage = async () => {
  return (
    <main>
      <div className="flex items-center justify-center">
        <LoginForm className="mt-24" />
      </div>
    </main>
  );
};

export default LoginPage;
