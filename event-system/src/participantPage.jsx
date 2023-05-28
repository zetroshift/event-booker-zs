import React, { useState } from "react";

function participantPage() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });
  const [participants, setParticipants] = useState([]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  async function onSubmit(e) {
    e.preventDefault();

    const newPerson = { ...form };
    await fetch("http://localhost:3000/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
      .then((response) => response.json())
      .then((data) => {
        newPerson.id = data.id;
        const updateList = [...participants, newPerson];
        setParticipants(updateList);
      })
      .catch((error) => {
        window.alert(error);
        return;
      });

    setForm({ name: "", surname: "", email: "", phone: "" });
  }

  async function onDelete(id) {
    await fetch(`http://localhost:3000/api/events/${id}`, {
      method: "DELETE",
    });

    const newParticipants = participants.filter((el) => el.id !== id);
    setParticipants(newParticipants);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname: </label>
          <input
            type="text"
            className="form-control"
            id="surname"
            value={form.surname}
            onChange={(e) => updateForm({ surname: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number: </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={form.phone}
            onChange={(e) => updateForm({ phone: e.target.value })}
          />
        </div>
        <input value="Submit" type="submit" className="btn btn-primary" id="" />
      </form>
      <div className="numPartic">
        Number of participants: {participants.length}
      </div>
      {participants.map((participant) => {
        return (
          <div className="participantEntry" key={participant.id}>
            <div>Name: {participant.name}</div>
            <div>Surname: {participant.surname}</div>
            <div>Email: {participant.email}</div>
            <div>Phone number: {participant.phone}</div>
            <button onClick={() => onDelete(participant.id)}>
              Delete entry
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default participantPage;
