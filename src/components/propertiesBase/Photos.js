
// Uwaga: Odkomentuj poniższe linijki podczas pracy z kompilatorem JSX:
import React from 'react';
import ReactDOM from 'react-dom';

const Photos = () => {	
	const handleSubmit = (e) => {
	  e.preventDefault();
	  const formData = new FormData(e.target);
	  fetch("../files", {
		method: "POST",
		body: formData,
	  })
		.then((response) => {
		  response.text()
			.then((text) => console.log(text));
		})
		.catch((error) => {
		  console.error("File upload error!");
		});
	};
	return (
	  <form onSubmit={handleSubmit}>
		<label htmlFor="userfile">Wybierz plik:</label><br />
		<br />
		<input type="file" name="my-file" /><br />
		<br />
		<input type="submit" value="Zatwierdź!" />
	  </form>
	);
  };
  
export default Photos;

// import React from 'react';
// // import './upload.css';

// class Photos extends React.Component {
	
// 	constructor(props) {
// 		super(props);
// 		this.state = {file: '', msg: ''};
// 	}
	
// 	onFileChange = (event) => {
// 		this.setState({
// 			file: event.target.files[0]
// 		});
// 	}
	
// 	uploadFileData = (event) => {
// 		event.preventDefault();
// 		this.setState({msg: ''});

// 		let data = new FormData();
// 		data.append('file', this.state.file);

// 		fetch('http://localhost:3000/files', {
// 			method: 'POST',
// 			body: data
// 		}).then(response => {
// 			this.setState({msg: "File successfully uploaded"});
// 		}).catch(err => {
// 			this.setState({error: err});
// 		});

// 	}
	
// 	render() {
// 		return (
// 			<div id="container">
// 				<h1>File Upload Example using React</h1>
// 				<h3>Upload a File</h3>
// 				<h4>{this.state.msg}</h4>
// 				<input onChange={this.onFileChange} type="file"></input>
// 				<button disabled={!this.state.file} onClick={this.uploadFileData}>Upload</button>
// 			</div>
// 		)
// 	}

// }

// export default Photos;