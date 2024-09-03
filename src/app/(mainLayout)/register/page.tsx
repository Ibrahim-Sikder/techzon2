"use client";

import "./register.css";
import google from "../../../assets/images/google.png";
import Link from "next/link";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Grid } from "@mui/material";
import TECForm from "@/components/Forms/Form";
import { FieldValues } from "react-hook-form";
import TECInput from "@/components/Forms/Input";
import { toast } from "sonner";
import { useRegisterMutation } from "@/redux/api/userApi";


import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { setCookie } from "@/helpers/axios/Cookies";
import { useRouter } from "next/navigation";

const userSchema = z
  .object({
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    email: z.string().email('Invalid email address').nonempty('Email is required'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().nonempty('Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });


type UserSchema = z.infer<typeof userSchema>;



const Register = () => {
  const [register] = useRegisterMutation()
  const router = useRouter()
  const defaultValues: UserSchema = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",

  };
  interface ApiError {
    data?: {
      message?: string;
    };
    status?: number;
  }



  const submitHandler = async (data: FieldValues) => {
    try {
      const res = await register(data).unwrap();
      console.log(res);

      // Set the cookie with the correct 'expires' option
      setCookie('token', res?.token, { expires: 7 });  // Use 'expires' instead of 'expiresIn'

      toast.success(res?.message || "User created successfully!");
      router.push('/');
    } catch (err) {
      const error = err as ApiError;
      console.error("API Error:", error);
      toast.error(error?.data?.message || "An error occurred during registration");
    }
  };



  return (
    <TECForm onSubmit={submitHandler}
      resolver={zodResolver(userSchema)}
      defaultValues={defaultValues}
    >
      <div className="signupWrap">
        <h3 className="mb-5 text-3xl font-bold text-center capitalize">
          Create a TechZon Account{" "}
        </h3>

        <div className="SignupFormWrap">
          <div>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TECInput fullWidth type="text" name="firstName" label="First Name " />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TECInput fullWidth type="text" name="lastName" label="Last Name " />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TECInput fullWidth type="email" name="email" label="Email Address " />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TECInput fullWidth type="password" name="password" label="Password " />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TECInput fullWidth type="password" name="confirmPassword" label="Confirm Password " />
              </Grid>

            </Grid>



            <small className="block w-[300px] mb-5">
              By Creating an account, you agree to our User Agreement and
              acknowledge reading our User Privacy Notice .
            </small>
            <button className="signupBtn bg-[#2251CF] text-white ">
              Create Account{" "}
            </button>
          </div>
          <div className="devider">
            <div className="line"></div>
            <div>or</div>
            <div className="line"></div>
          </div>

          <div className="mt-5 lg:mt-0 ">
            <button className="mb-5 text-black signupBtn ">
              <Image src={google} alt="google" width="50" height="50" />
              <span>Continue With Google </span>{" "}
            </button>
            <button className="signupBtn bg-[#4078c0] text-white ">
              <FaGithub className="mr-5" size={25} />{" "}
              <span>Continue With Github </span>{" "}
            </button>

            <span className="block mt-3 ">
              Already a member? <Link href="/login">Sing In </Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </TECForm>
  );
};

export default Register;
