import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Message = (props) => {

	const removeMessage = (event) =>{	
		let indexMsg = event.currentTarget.getAttribute("id")
		props.removeMsg(indexMsg)	
		}

	const editMessage = (event) =>{	
		let indexMsg = event.currentTarget.getAttribute("id")
		props.changeClick(indexMsg)	
		}
	return  <div className = { props.name == "Anfisa"? "wrp-item-bot" : "wrp-item"  }>
				<div className ={ props.name == "Anfisa"? "item bot" : "item" }>
					<div className = "avatar"></div>
					<span> <div><strong>{props.name} </strong></div> <i> {props.text} </i></span>
					{props.name !== "Anfisa"? 
						<div className = "options">
							<div onClick = {editMessage} id = {props.index}>
								<EditIcon />
							</div>
							<div onClick = {removeMessage}  id = {props.index}>
								<DeleteIcon />
							</div>
						</div> : null} 
				</div>
			</div>	
	}

export default Message;