<template>
    <div class="eat-container">
		<div class="eat-view">
	    	<div class="appointment">
	    		<div class="appointment-main" v-if="selectVal">
	    			<div class="title">Appointment</div>
	    			<div class="date">{{appointmentTime.month}} {{appointmentTime.date}} {{appointmentTime.fullYear}}</div>
	    			<div class="time">{{appointmentTime.hours}} : {{appointmentTime.minutes}}</div>
	    		</div>
	    		<div class="appointment-main" v-if="!selectVal">
	    			<div class="title">Appointment</div>
	    			<div class="date invisible">...</div>
	    			<div class="time invisible">...</div>
	    		</div>
	    		<div class="icon-main valignCenter">
		    		<i class="netappIcon icon-greater-than"></i>
	    		</div>
	    		<div class="mask-dateTime">
	    			<label>
	    				<input type="datetime-local" v-model="selectVal" @change="getAppointmentTime" @focus="appointmentMask = true" @blur="isOutDate" :disabled="!isAppointmentAction">
	    				 <!-- :disabled="isAppointmentAction" -->
	    			</label>
	    			<!-- <div class="mask" v-show="appointmentMask"></div> -->
	    		</div>
	    	</div>

	    	<div class="onsite" :class="{disabled: isOnsiteDisable}" @click="submit">
	    		<div class="onsite-main">
	    			<div class="title">Onsite</div>
	    			<div class="date">{{onsiteTime.month}} {{onsiteTime.date}} {{onsiteTime.fullYear}}</div>
	    			<div class="time">{{onsiteTime.hours}} : {{onsiteTime.minutes}} (Current)</div>
	    		</div>
	    		<div class="icon-main valignCenter">
		    		<i class="netappIcon icon-greater-than"></i>
	    		</div>
	    	</div>
		</div>
    </div>
</template>

<script type="ecmascript-6">
export default{
	data(){
		return{
			monthEN: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			selectVal: '',
			appointmentMask: false,
			isOnsiteDisable: true,
			isOnsiteAction: true,
			appointmentTime: {
				date: '',
				month: '',
				fullYear: '',
				hours: '',
				minutes: ''
			},
			onsiteTime: {
				date: '',
				month: '',
				fullYear: '',
				hours: '',
				minutes: ''
			},
			currentTime: ''
		}
	},
	created(){
		this.init();
	},
	watch:{
		soDataAppointmentTime: function () {
			this.init();
		}
	},
	computed:{
		isAppointmentAction(){
			return !this.selectVal;
		},
		soDataAppointmentTime(){
			return this.$store.state.soData.appointmentTime;
		}
	},
	methods:{
		init(){
			// let newTime = new Date();
			// let date = newTime.getDate();
			// let month = this.monthEN[newTime.getMonth()];
			// let fullYear = newTime.getFullYear();
			// let hours = newTime.getHours();
			// let minutes = newTime.getMinutes();
			
			console.log("this.$store.state.soData.appointmentTime");

			if (this.$store.state.soData.appointmentTime) {
				this.appointmentMask = true;
				this.selectVal = this.$store.state.soData.appointmentTime;
				this.getAppointmentTime();
			}

			this.isOnsiteDisable = !this.selectVal;

			this.isOnsiteAction = !this.$store.state.soData.onsiteTime;
			
			this.getOnsiteTime();
			this.getCurrentTime();
			setInterval(() => {
				this.getOnsiteTime();
				this.getCurrentTime();
			},5000)
		},
		isOutDate(){
			if (this.selectVal) {
				let currentTime = new Date().getTime();
				let newDate = this.toDate(this.selectVal).getTime();
				this.appointmentMask = false;
				if (currentTime > newDate) {
					this.selectVal = '';
					alert("不能设置为过去的时间");
				} else{
					let selectTime = this.selectVal.substring(0, 16).replace(/T/g, " ");
					let hint = `是否设置预约时间为\n${selectTime}?\n确定后将会无法更改预约时间。`;
					// confirm(hint) ? this.isOnsiteDisable = false : this.selectVal = '';
					if (confirm(hint)) {
						this.isOnsiteDisable = false;
						this.$store.state.soData.appointmentTime = this.selectVal.substring(0, 16);
					} else{
						this.selectVal = '';
					}
				}
			}
		},
		getTime(){
			let newTime = new Date();
			return {
				date: newTime.getDate(),
				month: this.monthEN[newTime.getMonth()],
				fullYear: newTime.getFullYear(),
				hours: newTime.getHours(),
				minutes: newTime.getMinutes()
			}
		},
		toDate(d){
			// let newDate = d.re
			// let date = new Date("2018/02/25 21:34:36.017");
			let date = new Date();
			date.setFullYear(parseInt(d.substring(0,4)));
			date.setMonth(parseInt(d.substring(5,7)) -1);
			date.setDate(parseInt(d.substring(8,10)));
			date.setHours(parseInt(d.substring(11,13)));
			date.setMinutes(parseInt(d.substring(14,16)));
			// alert(`${newFullYear}/${newMonth}/${newDate} ${newHours}:${newMinutes}`)
			return date;
		},
		doubleDigits(n){
			return `0${n}`.slice(-2);
		},
		getAppointmentTime(){
			let newDate = this.toDate(this.selectVal);
			this.appointmentTime.date = newDate.getDate();
			this.appointmentTime.month = this.monthEN[newDate.getMonth()];
			this.appointmentTime.fullYear = newDate.getFullYear();
			this.appointmentTime.hours = this.doubleDigits(newDate.getHours());
			this.appointmentTime.minutes = this.doubleDigits(newDate.getMinutes());
		},
		getOnsiteTime(){
			this.onsiteTime.date = this.getTime().date;
			this.onsiteTime.month = this.getTime().month;
			this.onsiteTime.fullYear = this.getTime().fullYear;
			this.onsiteTime.hours = this.doubleDigits(this.getTime().hours);
			this.onsiteTime.minutes = this.doubleDigits(this.getTime().minutes);
		},
		getCurrentTime(){
			let date = new Date();
			let current = {};
			let text;
			current.date = date.getDate();
			current.month = this.doubleDigits(date.getMonth() + 1);
			current.fullYear = date.getFullYear();
			current.hours = this.doubleDigits(date.getHours());
			current.minutes = this.doubleDigits(date.getMinutes());
			this.currentTime = `${current.fullYear}-${current.month}-${current.date}T${current.hours}:${current.minutes}`
		},
		submit(){
			// let dateTime = `${this.onsiteTime.fullYear}-`;
			if (!this.isOnsiteDisable && this.isOnsiteAction) {
				let hint = '是否确认签到？'
				// confirm(hint) ? this.isOnsiteAction = false : '';
				if (confirm(hint)) {
					this.isOnsiteAction = false;
					this.$store.state.soData.onsiteTime = this.currentTime;
				}
			}
		}
	}
}
</script>

<style lang="less" scoped>
    .eat-container{
    	.eat-view{
	    	padding: 43px 10px 0;

	    	.appointment, .onsite{
	    		display: flex;
	    		position: relative;
	    		align-items: center;
	    		height: 140px;
	    		border-radius: 4px;
	    		color: #fff;

	    		&.appointment{
	    			margin-bottom: 37px;
		    		background: linear-gradient(to right, #fea689, #ffeace);
	    			box-shadow: 0 4px 9px rgba(101, 40, 19, .14);
	    		}

	    		&.onsite{
		    		background: linear-gradient(to right, #63c2ff, #12f1ff);
	    			box-shadow: 0 4px 9px rgba(5, 46, 70, .14);

	    			&.disabled{
	    				background: rgb(178,178,178);
	    				box-shadow: none;
	    			}
	    		}

	    		.appointment-main, .onsite-main{
	    			flex: auto;
		    		padding: 0 20px;

		    		.title{
		    			font-size: 28px;
		    			font-weight: bold;
		    			margin-bottom: 19px;
		    		}

		    		.date{
		    			font-size: 17px;
		    			font-weight: bold;
		    			margin-bottom: 11px;

		    			&.invisible{
		    				visibility: hidden;
		    			}
		    		}

		    		.time{
		    			font-size: 17px;
		    			font-weight: bold;

		    			&.invisible{
		    				visibility: hidden;
		    			}
		    		}
	    		}

				.icon-main{
					width: 101px;
					height: 100%;
					border-left: 1px solid rgba(0,0,0,.15);
					text-align: center;

					.icon-greater-than{
						font-size: 60px;
					}
				}

				.mask-dateTime{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					overflow: hidden;
					opacity: 0;

					label{
						display: inline-block;
						width: 100%;
						height: 100%;

						input{
							transform: translateY(-100%);
						}
					}

					.mask{
						position: absolute;
						z-index: 1;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
					}
				}
	    	}
    	}
    }
</style>