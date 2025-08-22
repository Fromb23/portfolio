import React from 'react';
import { User, Mail, Type, BookOpen, AlertCircle } from 'lucide-react';

const FormField = ({ field, formData, touchedFields, handleChange, handleBlur }) => {
  const hasError = touchedFields[field.name] && field.required && !formData[field.name];
  
  return (
    <div className={field.colSpan}>
      <label className="block text-sm font-medium text-primary mb-2 flex items-center">
        {field.icon && React.cloneElement(field.icon, { className: "mr-1" })}
        {field.label}
        {field.required && <span className="text-accent ml-1">*</span>}
      </label>
      {field.type === 'textarea' ? (
        <textarea
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 bg-secondary border rounded-lg focus:outline-none transition-all duration-300 resize-none hover:border-primary/40 ${
            hasError 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-primary/20 focus:border-accent'
          }`}
          placeholder={field.placeholder}
          rows="4"
          required={field.required}
        />
      ) : (
        <input
          type={field.type}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 bg-secondary border rounded-lg focus:outline-none transition-all duration-300 hover:border-primary/40 ${
            hasError 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-primary/20 focus:border-accent'
          }`}
          placeholder={field.placeholder}
          required={field.required}
        />
      )}
      {hasError && (
        <p className="text-red-500 text-xs mt-1 flex items-center">
          <AlertCircle size={12} className="mr-1" />
          This field is required
        </p>
      )}
    </div>
  );
};

const FormFields = ({ formData, touchedFields, handleChange, handleBlur }) => {
  const formFieldsConfig = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      icon: <User size={14} />,
      placeholder: 'John',
      required: true,
      colSpan: 'md:col-span-1'
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Doe',
      required: true,
      colSpan: 'md:col-span-1'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      icon: <Mail size={14} />,
      placeholder: 'john@example.com',
      required: true,
      colSpan: 'md:col-span-2'
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      icon: <Type size={14} />,
      placeholder: 'Project Discussion',
      required: true,
      colSpan: 'md:col-span-2'
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      icon: <BookOpen size={14} />,
      placeholder: 'Tell me about your project...',
      required: true,
      colSpan: 'md:col-span-2'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {formFieldsConfig.map((field, index) => (
        <FormField 
          key={index} 
          field={field} 
          formData={formData}
          touchedFields={touchedFields}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      ))}
    </div>
  );
};

export default FormFields;