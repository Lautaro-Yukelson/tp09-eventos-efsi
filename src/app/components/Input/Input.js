import "./Input.css";

export default function Input({ type, name, id, placeholder, onChange }) {
	return (
		<div className="input-container">
			<input
				type={type}
				name={name}
				id={id}
				autoComplete="off"
				onChange={onChange}
				required
			/>
			<label htmlFor={id} className="label">
				{placeholder}
			</label>
			<div className="underline"></div>
		</div>
	);
}
