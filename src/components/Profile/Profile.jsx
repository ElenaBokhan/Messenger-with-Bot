import React, { Component } from 'react';

class Profile extends Component{
	constructor(props){
		super(props);
		this.state = {
			1: {
				info:"Илон Рив Маск - американский предприниматель, изобретатель, инженер и миллиардер",
				birthday: "Родился: 28 июня 1971 г. (возраст 48 лет), Претория, ЮАР",
				capital: "Собственный капитал: 40,4 миллиарда USD (2020 г.)",
				photo:"https://static.mk.ru/upload/entities/2019/10/18/22/articles/detailPicture/1e/29/a3/a5/a0b656599fde72d6d31da7415a8cbad4.jpg"
			},
			2: {
				info:"Па́вел Вале́рьевич Ду́ров — российский предприниматель, программист, долларовый миллиардер, один из создателей социальной сети «ВКонтакте» и одноимённой компании, кроссплатформенного мессенджера Telegram и других проектов. Бывший генеральный директор «ВКонтакте».",
				birthday: "Родился: 10 октября 1984 г. (возраст 35 лет), Санкт-Петербург",
				capital: "Собственный капитал: 3,4 миллиарда USD (2020 г.)",
				photo:"https://icdn.lenta.ru/images/2020/04/30/11/20200430112003232/square_320_9b800feb95ac10798046688bf44a0928.png"
			},
			3: {
				info:"Уи́льям Ге́нри Гейтс III, более известный как Билл Гейтс — американский предприниматель и общественный деятель, филантроп, один из создателей и бывший крупнейший акционер компании Microsoft.",
				birthday: "Родился: 28 октября 1955 г. (возраст 64 года), Сиэтл, Вашингтон, США",
				capital: "Собственный капитал: 108,4 миллиарда USD (2020 г.)",
				photo:"https://regnum.ru/uploads/pictures/news/2017/11/28/regnum_picture_1511851771683300_normal.jpg"
			},
		}
	}
render(){
	const personProfile = this.state[this.props.profileId];
	return (
		<div className = "profile-field">
			<div className = "photo">
				<img src={personProfile.photo} />
			</div>
			<div className = "info">
				<p>{personProfile.info}</p>
				<p>{personProfile.birthday}</p>
				<p>{personProfile.capital}</p>
			</div>
		</div>		
		)
	}
	}
export default Profile;
