'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface ContactFormData {
  parentName: string;
  email: string;
  phone: string;
  numberOfChildren: string;
  childrenAges: string;
  message: string;
  startDate: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // For MVP: Using Formspree.io (free tier, 50 submissions/month)
      // Sign up at formspree.io and replace 'YOUR_FORM_ID' with actual form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Parent Name */}
      <div>
        <label htmlFor="parentName" className="block text-sm font-semibold leading-6 text-charcoal">
          Parent/Guardian Name *
        </label>
        <input
          type="text"
          id="parentName"
          {...register('parentName', { required: 'Name is required' })}
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-charcoal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
        />
        {errors.parentName && (
          <p className="mt-1 text-sm text-red-600">{errors.parentName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-charcoal">
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-charcoal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-charcoal">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: 'Phone number is required' })}
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-charcoal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Number of Children */}
      <div>
        <label htmlFor="numberOfChildren" className="block text-sm font-semibold leading-6 text-charcoal">
          Number of Children *
        </label>
        <select
          id="numberOfChildren"
          {...register('numberOfChildren', { required: 'Please select number of children' })}
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-charcoal shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
        >
          <option value="">Select...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5+">5 or more</option>
        </select>
        {errors.numberOfChildren && (
          <p className="mt-1 text-sm text-red-600">{errors.numberOfChildren.message}</p>
        )}
      </div>

      {/* Children Ages */}
      <div>
        <label htmlFor="childrenAges" className="block text-sm font-semibold leading-6 text-charcoal">
          Ages of Children *
        </label>
        <input
          type="text"
          id="childrenAges"
          placeholder="e.g., 3 months, 2 years, 5 years"
          {...register('childrenAges', { required: 'Please provide children\'s ages' })}
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-charcoal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
        />
        {errors.childrenAges && (
          <p className="mt-1 text-sm text-red-600">{errors.childrenAges.message}</p>
        )}
      </div>

      {/* Preferred Start Date */}
      <div>
        <label htmlFor="startDate" className="block text-sm font-semibold leading-6 text-charcoal">
          Preferred Start Date
        </label>
        <input
          type="date"
          id="startDate"
          {...register('startDate')}
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-charcoal shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-charcoal">
          Tell us about your needs *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: 'Please tell us about your needs' })}
          placeholder="Describe your family's needs, schedule requirements, any special considerations..."
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-charcoal shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="block w-full rounded-md bg-gold px-3.5 py-2.5 text-center text-sm font-semibold text-navy shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="rounded-md bg-green-50 p-4">
          <p className="text-sm font-medium text-green-800">
            Thank you! We'll be in touch within 24 hours to discuss your needs.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm font-medium text-red-800">
            Sorry, there was an error submitting your form. Please try again or email us directly at info@britishnanny.co
          </p>
        </div>
      )}
    </form>
  );
}
