'use client'

import google from '../../../assets/images/google.png'
import { FaFacebookF } from "react-icons/fa6";
import Image from 'next/image';
import '../register/register.css'
import Link from 'next/link';
import { Grid} from '@mui/material';
import TECForm from '@/components/Forms/Form';
import { FieldValues } from 'react-hook-form';
import TECInput from '@/components/Forms/Input';
import Container from '@/components/shared/Container';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/redux/api/authApi';

interface LoginResponse {
    accessToken: string;
    message: string;
}

const Login = () => {
    const [login] = useLoginMutation()
    const router = useRouter()
    const handleSubmit = async (data: FieldValues) => {
        console.log('real data', data)
        try {
            const res = await login(data).unwrap() as LoginResponse;
            console.log(res)
         

            // storeUserInfo({ accessToken: res?.accessToken });
            // setCookie('token', res?.accessToken, { expires: 7 });

            toast.success(res.message || 'OTP Sent to your Email!');
            router.push(`/verify?email=${data?.email}`);
        } catch (err: any) {
            toast.error(err?.data?.message || 'An error occurred during login.');
        }
    };



    return (
        <Container className=''>
            <TECForm onSubmit={handleSubmit}>
                <div className="">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-center mb-5  capitalize">Hello</h3>
                        <span>
                            Sign In TechZon or <Link href='/register'><b className="border-b-2 border-[#2251CF]">Create an account </b></Link>
                        </span>
                    </div>

                    <div className='w-[400px] mx-auto '>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TECInput size='medium' fullWidth type="text" name="email" label="Email" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TECInput size='medium' fullWidth type="password" name="password" label="Password" />
                            </Grid>
                        </Grid>


                        <button className="signupBtn loginBtn bg-[#2251CF] text-white businessBtn">Continuo </button>
                        <div className="flex flex-col my-3 w-[320px] border-opacity-50">
                            <div className="divider">OR</div>
                        </div>
                        <div>
                            <button className="signupBtn loginBtn mb-5 text-black  ">
                                <Image
                                    src={google}
                                    alt='google'
                                    width='50'
                                    height='50'
                                /> <span>Continuo With Google </span>{' '}
                            </button>
                            <button

                                className="signupBtn loginBtn bg-[#3F63AB] text-white ">
                                <FaFacebookF className="mr-5" size={25} /> <span>Continuo With Facebook </span>{' '}
                            </button>
                        </div>
                        <div className="text-center w-[300px] mx-auto  mt-3">
                            <div className="flex justify-center items-center">
                                <input className='mr-2' type="checkbox" />
                                <span>Stay signed in</span>
                            </div>
                            <span className='block mx-auto w-[250px]'> Using a public or shared device? Uncheck to protect your account.</span>
                        </div>
                    </div>

                </div>
            </TECForm>
        </Container>
    )
}

export default Login
