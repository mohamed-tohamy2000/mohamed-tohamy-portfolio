import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { contactSchema } from "../../validation/contact.schema";
import { submitContactForm } from "../../services/contact.service";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export default function ContactFormSection() {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await submitContactForm(values);
      toast.success("Opening WhatsApp...");
      resetForm();
    } catch (_error) {
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-[2rem] p-6"
    >
      <h3 className="text-2xl font-bold text-base-content">Get In Touch</h3>

      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-base-content/75">Name</label>
              <Field
                name="name"
                placeholder="Your name"
                className="input input-bordered w-full border-base-300 bg-base-200/60 text-base-content"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="mt-2 text-sm text-red-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-base-content/75">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full border-base-300 bg-base-200/60 text-base-content"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="mt-2 text-sm text-red-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-base-content/75">Message</label>
              <Field
                as="textarea"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                className="textarea textarea-bordered w-full border-base-300 bg-base-200/60 text-base-content"
              />
              <ErrorMessage
                name="message"
                component="p"
                className="mt-2 text-sm text-red-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-success w-full text-black"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
}


