import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form";

export default function CreateMembership() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        axios
        .post("http://localhost:8080/plan/create", data, {withCredentials: true})
        .then((response) => {
          console.log(response.data)
          //Set timout function needs to run after successful login in order to retrieve data after the post request, otherwise the data does not show
          navigate("/")
        })
        .catch((error) => {
          console.log(error);
        })
      }
    return(
        <>
<div className="flex flex-col items-center justify-center">
          <div className="bg-gray-100 w-96 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-2xl font-semibold text-center mb-4">
                Create new membership plan
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Fill out the form to create new membership plan
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-x-5">
                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                      Membership title:
                    </label>
                    <input
                      className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                      {...register("title", {
                        required: "Title is required",
                      })}
                      placeholder="Title"
                    />
                    {errors.title?.type === "required" && (
                      <span className="label self-start mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        {errors.title.message}
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="price"
                      className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                      Price {`(in €)`}:
                    </label>
                    <input
                      className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                      {...register("price", {
                        required: "Price is required",
                      })}
                      placeholder="Price"
                    />
                    {errors.price?.type === "required" && (
                      <span className="label self-start mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        {errors.price.message}
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="totalCredits"
                      className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                      Maximum credits:
                    </label>
                    <input
                      className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                      {...register("totalCredits", {
                        required: "Maximum credits are required",
                      })}
                      placeholder="Max Credits"
                    />
                    {errors.totalCredits?.type === "required" && (
                      <span className="label self-start mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        {errors.totalCredits.message}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-2"
                >
                  Create
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="w-full bg-neutral text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Go back
                </button>
              </form>
            </div>
          </div>
        </div>
        </>
    )
}