import React, { useState } from "react";
import { HvInputText } from "hv-styleguide-react/src/components";

import "./App.css";

const App: React.FC = () => {
	const [form, setState] = useState({
		firstName: "React",
		lastName: "Example"
	});

	const updateField = (event: any) => {
		setState({
			...form,
			[event.target.name]: event.target.value
		});
	};

	return (
		<div className="App">
			<section className="background--green">
				<h1>React + Web Components</h1>
			</section>

			<section className="background--white">
				<h3>Web component Input</h3>
				<HvInputText
					label="First name"
					name="firstName"
					value={form.firstName}
					onChange={(event) => {
						console.log("test");
						updateField(event);
						console.log(event);
					}}
				></HvInputText>

				<HvInputText
					label="Last name"
					name="lastName"
					value={form.lastName}
					onChange={updateField}
					onEventBindValue={updateField}
				></HvInputText>
			</section>

			<section className="background--champagne">
				<h3>Default HTML Input</h3>
				<input
					name="firstName"
					value={form.firstName}
					onChange={updateField}
				></input>
				<input
					name="lastName"
					value={form.lastName}
					onChange={updateField}
				></input>
			</section>
			<section className="background--blue">
				<strong>
					<pre>{JSON.stringify(form)}</pre>
				</strong>
			</section>
		</div>
	);
};

export default App;
