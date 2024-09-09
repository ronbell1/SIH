"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { createClient } from '@supabase/supabase-js';
import { useState } from "react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export function Signup() {
  const[email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    const { user } = data;
    if (user) {
      const { error: insertError } = await supabase
        .from("login")
        .insert([{ email, first_name: firstName, last_name: lastName }]);

      if (insertError) {
        setError(insertError.message);
      } else {
        console.log("User successfully signed up and added to login table");
      }
    }
  };

  return (
  <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 bg-[#3498db] p-8">
          <h2 className="text-2xl font-bold text-white mb-4 font-['Poppins', 'sans-serif']">INFORMATION</h2>
          <p className="text-white mb-4 font-['Poppins', 'sans-serif']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <Button className="bg-white text-[#3498db] font-['Poppins', 'sans-serif']">Have An Account</Button>
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-[#3498db] mb-4 font-['Poppins', 'sans-serif']">REGISTER FORM</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="first-name" className="text-[#3498db] font-['Poppins', 'sans-serif']">
                First Name
              </Label>
              <Input
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="border-[#3498db] font-['Poppins', 'sans-serif']"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name" className="text-[#3498db] font-['Poppins', 'sans-serif']">
                Last Name
              </Label>
              <Input
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="border-[#3498db] font-['Poppins', 'sans-serif']"
              />
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <Label htmlFor="email" className="text-[#3498db] font-['Poppins', 'sans-serif']">Your Email</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              type="email"
              className="border-[#3498db] font-['Poppins', 'sans-serif']"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#3498db] font-['Poppins', 'sans-serif']">Password</Label>
              <Input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                className="border-[#3498db] font-['Poppins', 'sans-serif']"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-[#3498db] font-['Poppins', 'sans-serif']">Confirm Password</Label>
              <Input
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                type="password"
                className="border-[#3498db] font-['Poppins', 'sans-serif']"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex items-center mb-4">
            <Checkbox id="terms" className="border-[#3498db] bg-[#3498db]" />
            <Label htmlFor="terms" className="ml-2 text-sm text-[#3498db] font-['Poppins', 'sans-serif']">
              I agree to the{" "}
              <a href="#" className="text-[#3498db] font-['Poppins', 'sans-serif']">Terms and Conditions</a>
            </Label>
          </div>
          <Button onClick={handleSignup} className="bg-[#3498db] text-white w-full font-['Poppins', 'sans-serif']">Register</Button>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>)
  );
}


function TriangleAlertIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>)
  );
}
