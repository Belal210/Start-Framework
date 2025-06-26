import { useFormik } from "formik";
import * as yup from "yup";


export default function Contact() {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  const userSchema = yup.object({
    name: yup
      .string()
      .required("Name is required.")
      .min(3, "Must be more than 3 charactars.")
      .max(20, "Should not be more than 20 characters."),
    age: yup.number().required("Age is required.").positive("Invalid age."),
    email: yup
      .string()
      .required("Email is required.")
      .email("Enter a valid email."),
    password: yup
      .string()
      .required("Password is required.")
      .matches(
        passwordRegex,
        "Min 8 chars includes (1 num, 1 upper case letter)"
      ),
  });

  function sendMessage() {
    formik.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      password: "",
    },

    validationSchema: userSchema,

    onSubmit: sendMessage,
  });

  return (
    <>
      <section className="min-h-screen bg-white text-[#2c3e50] ">
        <div className="container w-2/3 mx-auto pt-28 pb-10 text-center">
          <h2 className="uppercase text-xl md:text-3xl lg:text-4xl font-bold m-5">
            Contact component
          </h2>
          <div className="flex justify-center items-center space-x-5">
            <div className="px-6 md:px-10 h-1 bg-[#2c3e50] "></div>
            <i className="fa-solid fa-star"></i>
            <div className="px-6 md:px-10 h-1 bg-[#2c3e50] "></div>
          </div>
          <form
            action=""
            className="mt-12 space-y-9 text-start"
            onSubmit={formik.handleSubmit}
          >
            <div className="user-name relative">
              <input
                type="text"
                id="small_outlined-name"
                className="block px-2.5 py-3 w-full text-sm text-gray-700 bg-transparent  border-1 border-t-0 border-x-0 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                placeholder=""
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label
                htmlFor="small_outlined-name"
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                userName
              </label>
              {formik.errors.name && formik.touched.name ? (
                <p className="absolute bottom-[-2rem] text-xs md:text-sm text-red-600 text-start rounded-sm text-md py-1 mt-1 font-medium">
                  * {formik.errors.name}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="user-age relative">
              <input
                type="number"
                id="small_outlined-age"
                className="block px-2.5 py-3 w-full text-sm text-gray-700 bg-transparent  border-1 border-t-0 border-x-0 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                placeholder=""
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label
                htmlFor="small_outlined-age"
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                userAge
              </label>
              {formik.errors.age && formik.touched.age ? (
                <p className="absolute bottom-[-2rem] text-xs md:text-sm text-red-600 text-start rounded-sm text-md py-1 mt-1 font-medium">
                  * {formik.errors.age}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="user-email relative">
              <input
                type="email"
                id="small_outlined-email"
                className="block px-2.5 py-3 w-full text-sm text-gray-700 bg-transparent  border-1 border-t-0 border-x-0 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                placeholder=""
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label
                htmlFor="small_outlined-email"
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                userEmail
              </label>
              {formik.errors.email && formik.touched.email ? (
                <p className="absolute bottom-[-2rem] text-xs md:text-sm text-red-600 text-start rounded-sm text-md py-1 mt-1 font-medium">
                  * {formik.errors.email}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="user-password relative">
              <input
                type="password"
                id="small_outlined-password"
                className="block px-2.5 py-3 w-full text-sm text-gray-700 bg-transparent  border-1 border-t-0 border-x-0 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                placeholder=""
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label
                htmlFor="small_outlined-password"
                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                userPassword
              </label>
              {formik.errors.password && formik.touched.password ? (
                <p className="absolute w-72 md:w-full bottom-[-2rem] text-xs md:text-sm text-red-600 text-start rounded-sm text-md py-1 mt-1 font-medium">
                  * {formik.errors.password}
                </p>
              ) : (
                ""
              )}
            </div>
            
            <button
              id="submit"
              type="submit"
              className="cursor-pointer mt-2 py-2 px-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md me-auto disabled:bg-blue-300"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
