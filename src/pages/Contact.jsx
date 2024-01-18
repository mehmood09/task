import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  //const onSubmit = data => console.log(data);
  //console.log(watch("example")); // watch input value by passing the name of it

    async function postData(url = "", data = {}) {
        console.log(data)
        const response = await fetch(url, {
            method:"POST", //Get, POST, PUT, DELETE etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
        const onSubmit = (data) => {  console.log(data);
        postData("http://localhost:5000/contact", data).then((response) => {
        console.log(response); // JSON data parsed by `data.json()` call
        });
        };
            //console.log(watch("name"))
            //console.log(errors)npx tailwindcss init -p
        return (
   
            <div className="px-4 mx-auto max-w-screen-md">
            <h2 className="heading text-center"> Contact Us </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text__para">
                Got a technical issue? Want to send feedback about a beta feature? Let us know.
            </p>
                <form action="#" className="space-y-8">
                    <div>
                    <lable htmlFor="email" className="form__label"> Your Email</lable>
                    <input type="email" id="email" placeholder="example@gmail.com" className="form__input mt-1" />
                    </div>
                    <div>
                    <lable htmlFor="subject" className="form__label"> Subject</lable>
                    <input type="text" id="subject" placeholder="Let us know how we can help you" className="form__input mt-1" />
                    </div>
                    <div className="sm:col-span-2">
                    <lable htmlFor="message" className="form__label"> Your Message</lable>
                    <textarea rows="6" type="text" id="message" placeholder="Leave your message..." className="form__input mt-1" />
                    </div>
                    <button type="submit" className="btn rounded sm:w-fit">Submit</button>
                </form>
        </div>

  );
}