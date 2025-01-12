import { useEffect } from "react";
import SignUp from "../components/SignUp";

const SignUpPage = () => {
  useEffect(() => {
    document.title = "Sign Up | IceFit";
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-50">
      <section className="ellipses relative overflow-hidden">
        <div 
          className="ellipse ellipse1 animate-pulse"
          style={{animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite"}}
        ></div>
        <div 
          className="ellipse ellipse2"
          style={{animation: "bounce 8s infinite"}}
        ></div>
        <div 
          className="ellipse ellipse3"
          style={{animation: "ping 5s cubic-bezier(0, 0, 0.2, 1) infinite"}}
        ></div>
        <div 
          className="ellipse ellipse4"
          style={{animation: "spin 10s linear infinite"}}
        ></div>
      </section>
      <div 
        className="glass overflow-hidden backdrop-blur-lg bg-white/30"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          border: "1px solid rgba(255, 255, 255, 0.18)"
        }}
      >
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
