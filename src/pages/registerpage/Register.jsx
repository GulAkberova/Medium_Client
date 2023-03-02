import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { data } from '../../api/data';
import { setLogin } from '../../slice';
function Register() {
  // let isAuth=(useSelector(state=>state.Au))
  // console.log(isAuth)
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const [panel, SetPanel] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (index) => {
    data.getByPost('auth/login',index)
    .then((res)=>{
      console.log(res.token)
      let token=res?.token;
      let user= res?.user
     alert('Qeydiyyat olundu')
     dispatch(setLogin({
      user:user,
      token:token
     }))

    
    // const access=res?.tokens?.access;
    // const refresh=res?.tokens?.refresh;
    // setAuth({index,access,refresh })
    
    navigate('/home')

    })
    .catch(err=>{
      alert('Email ya password yanlisdi')

    })

  };

  // console.log(isAuth)

  const onSubmitR = (index) => {
    data.getByPost('auth/register',index)
      .then((res) =>{
        // navigate("/email",{state:{email:res.email}});
        console.log(res)


      })
      .catch(err=>{
        console.log('err',err)
        alert('Email or password invalid')
      })
      SetPanel(!panel)
  };
  return (
    <>
      <section className="logreg_bigdiv">
        <div className="logreg_minidiv">
          <div className="logreg_img">
            {/* <img src={lr_img} /> */}
          </div>
          <div className="logreg_text ">
            {panel ? (
              // ____________________Panel Login________________________________}
              <div className="logreg_text_div">
                <h1>Giris</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label>
                    <i className="fa-solid fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    placeholder="username0@gmail.com"
                    {...register("email", {
                      required: "*Zehmet olmasa xanani doldurun.",
                    })}
                  />
                  <p> {errors.email && <span>{errors.email.message}</span>}</p>

                  <label>
                    <i className="fa-solid fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    placeholder="Sifre"
                    {...register("password", {
                      required: "*Zehmet olmasa xanani doldurun.",
                    })}
                  />
                  <p>
                    {" "}
                    {errors.password && <span>{errors.password.message}</span>}
                  </p>

                

                  <div className="add">
                    <button className="btn1">Giris et</button>
                    <button className="btn2" onClick={(e) => SetPanel(false)}>
                     Register
                    </button>
                  </div>
                  <div className="or">
                    <p>Or</p>
                  </div>
                  <div className="icon">
                    <p>
                      <i className="fa-brands fa-google"></i>
                    </p>
                    <p>
                      <i className="fa-brands fa-facebook-f"></i>
                    </p>
                    <p>
                      <i className="fa-brands fa-instagram"></i>
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              // _________________Panel Register_____________________________
              <div>
                <div className="logreg_text_div">
                  <h1>Qeydiyyat</h1>
                  <form onSubmit={handleSubmit(onSubmitR)}>
                    {/* ___________________Name_____________________ */}
                    <label>
                      <i className="fa-solid fa-user"></i>
                    </label>
                    <input
                      type="text"
                      placeholder="firstName"
                      {...register("firstName", {
                        required: "*Zehmet olmasa xanani doldurun.",
                      })}
                    />
                    <p> {errors.firstName && <span>{errors.firstName.message}</span>}</p>

                    {/* __________________Surname________________________ */}
                    <label>
                      <i className="fa-solid fa-user"></i>
                    </label>
                    <input
                      type="text"
                      placeholder="lastName"
                      {...register("lastName", {
                        required: "*Zehmet olmasa xanani doldurun.",
                      })}
                    />
                    <p> {errors.lastName && <span>{errors.lastName.message}</span>}</p>

                    {/* Location */}
                    <label>
                      <i className="fa-solid fa-user"></i>
                    </label>
                    <input
                      type="text"
                      placeholder="location"
                      {...register("location", {
                        required: "*Zehmet olmasa xanani doldurun.",
                      })}
                    />
                    <p> {errors.location && <span>{errors.location.message}</span>}</p>
                    {/* Occupation */}
                    <label>
                      <i className="fa-solid fa-user"></i>
                    </label>
                    <input
                      type="text"
                      placeholder="occupation"
                      {...register("occupation", {
                        required: "*Zehmet olmasa xanani doldurun.",
                      })}
                    />
                    <p> {errors.occupation && <span>{errors.occupation.message}</span>}</p>

                    {/* __________________Email______________________ */}

                    <label>
                      <i className="fa-solid fa-envelope"></i>
                    </label>
                    <input
                      type="email"
                      placeholder="username0@gmail.com"
                      {...register("email", {
                        required: "*Zehmet olmasa xanani doldurun.",
                      })}
                    />
                    <p>
                      {errors.email && <span>{errors.email.message}</span>}
                    </p>

                    {/* ___________________Phone___________________ */}
                

                    <label>
                      <i className="fa-solid fa-unlock"></i>
                    </label>
                    <input
                      type="password"
                      placeholder="Sifre"
                      {...register("password", {
                        required: "*Zehmet olmasa xanani doldurun.",
                      })}
                    />
                    <p>
                      {" "}
                      {errors.password && (
                        <span>{errors.password.message}</span>
                      )}
                    </p>

                    <label htmlFor="avatar">Choose a profile picture:</label>

<input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"/>

                    <div className="add">
                      <button className="btn1">Giris et</button>
                      <button className="btn2" onClick={(e) => SetPanel(true)}>
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Register