import React from "react";
import { AuthSecurityProps } from "../../data/projectsData";

const AuthenticationSecuritySection: React.FC<AuthSecurityProps> = ({
  security,
  title,
}) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-dark-accent mb-6">
        Authentication & Security Strategy
      </h2>
      <div className="bg-white p-8 rounded-xl shadow-lg text-subtle-text leading-relaxed space-y-4">
        <p>{security.description}</p>
        {security.diagram && (
          <img
            src={security.diagram}
            alt={`${title} Auth Flow`}
            className="w-full rounded-lg"
          />
        )}
      </div>
    </section>
  );
};

export default AuthenticationSecuritySection;
