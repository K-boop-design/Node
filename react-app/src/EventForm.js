// src/EventForm.js

import React, { useState } from 'react';

const EventForm = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    details: '',
    startDate: '',
    endDate: '',
    recurringInfo: '',
    category: '',
    tags: [],
    relevance: '',
    participationAccess: '',
    paymentMethod: '',
    pricingInfo: ''
  });
  const [submit,setSubmit]=useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm({
        ...form,
        [name]: checked
      });
    } else if (type === 'select-multiple') {
      const options = e.target.options;
      const selectedOptions = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedOptions.push(options[i].value);
        }
      }
      setForm({
        ...form,
        [name]: selectedOptions
      });
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        const result = await response.json();
        setSubmit('Submitted')
        console.log('Form submitted successfully:', result);
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (<>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
      </div>
      
      <div>
        <label>Description</label>
        <textarea name="description" value={form.description} onChange={handleChange}></textarea>
      </div>
      
      <div>
        <label>Details and Lineup</label>
        <textarea name="details" value={form.details} onChange={handleChange}></textarea>
      </div>
      
      <div>
        <label>Start Date</label>
        <input type="date" name="startDate" value={form.startDate} onChange={handleChange} />
      </div>
      
      <div>
        <label>End Date</label>
        <input type="date" name="endDate" value={form.endDate} onChange={handleChange} />
      </div>
      
      <div>
        <label>Recurring Info</label>
        <textarea name="recurringInfo" value={form.recurringInfo} onChange={handleChange}></textarea>
      </div>
      
      <div>
        <label>Categories</label>
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="optionOne">Option one</option>
          <option value="optionTwo">Option two</option>
        </select>
      </div>
      
      <div>
        <label>Tags</label>
        <select name="tags" multiple value={form.tags} onChange={handleChange}>
          <option value="optionOne">Option one</option>
          <option value="optionTwo">Option two</option>
        </select>
      </div>
      
      <div>
        <label>Relevance</label>
        <select name="relevance" value={form.relevance} onChange={handleChange}>
          <option value="endorsement">Endorsement</option>
          <option value="resource">Resource</option>
          <option value="hide">Hide</option>
        </select>
      </div>
      
      <div>
        <label>Participation Access</label>
        <select name="participationAccess" value={form.participationAccess} onChange={handleChange}>
          <option value="paid">Paid</option>
          <option value="inviteOnly">Invite only</option>
          <option value="open">Open</option>
        </select>
      </div>
      
      <div>
        <label>Payment Method</label>
        <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
          <option value="inAdvance">In advance</option>
          <option value="atDoor">At door</option>
          <option value="both">Both</option>
        </select>
      </div>
      
      <div>
        <label>Pricing Info</label>
        <textarea name="pricingInfo" value={form.pricingInfo} onChange={handleChange}></textarea>
      </div>
      
      <button type="submit">Submit</button>
    </form>
    <div>
        {submit && <h1>Form Submitted</h1>}
    </div>
    </>
  );
};

export default EventForm;
