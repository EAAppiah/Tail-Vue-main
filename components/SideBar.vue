<template>
	<div x-data="{ isSidebarOpen: false }">
		<div :class="{ 'sidebar': true, 'open': isSidebarOpen }">
			<div class="sidebar">
				<div class="logo_details">
					<img src="" alt="">
					<div class="logo_name">Xtralis</div>
					<i class="bx bx-menu" id="btn" @click="isSidebarOpen = !isSidebarOpen"></i>
				</div>

				<ul class="nav-list">
					<li>
						<i class="bx bx-search" @click="isSidebarOpen = !isSidebarOpen"></i>
						<input type="text" placeholder="   Search...">
						<span class="tooltip">Search</span>
					</li>
					<li>
						<NuxtLink to="/dashboard">
							<i class='bx bxs-dashboard'></i>
							<span class="link_name">Dashboard</span>
						</NuxtLink>
						<span class="tooltip">Dashboard</span>
					</li>
					<li>
						<NuxtLink to="/company">
							<i class='bx bxs-business'></i>
							<span class="link_name">Company</span>
						</NuxtLink>
						<span class="tooltip">Company</span>
					</li>
					<li>
						<NuxtLink to="/customerpage">
							<i class='bx bx-history'></i>
							<span class="link_name">Customer History</span>
						</NuxtLink>
						<span class="tooltip">CS History</span>
					</li>
					<li>
						<a href="#">
							<i class='bx bx-server'></i>
							<span class="link_name">Server</span>
						</a>
						<span class="tooltip">Server</span>
					</li>
					<li>
						<NuxtLink to="/stafftracker">
							<i class='bx bx-terminal'></i>
							<span class="link_name">Staff Logs</span>
						</NuxtLink>
						<span class="tooltip">Staff Logs</span>
					</li>
					<li>
						<NuxtLink to="/versionmonitor">
							<i class='bx bx-git-compare'></i>
							<span class="link_name">Version Monitor</span>
						</NuxtLink>
						<span class="tooltip">Version Monitor</span>
					</li>
					<li>
						<NuxtLink to="/producttable">
							<i class='bx bx-cart'></i>
							<span class="link_name">Products</span>
						</NuxtLink>
						<span class="tooltip">Products</span>
					</li>
					<li>
						<NuxtLink to="/manufacturers">
							<i class='bx bxs-data'></i>
							<span class="link_name">Manufacturers</span>
						</NuxtLink>
						<span class="tooltip">Manufacturers</span>
					</li>
					<li>
						<NuxtLink to="/settings">
							<i class="bx bx-cog"></i>
							<span class="link_name">Settings</span>
						</NuxtLink>
						<span class="tooltip">Settings</span>
					</li>
					<li class="profile">
						<div class="profile_details">
							<img src="../assets/image/♡ Luffy ♡.jpeg" alt="profile image">
							<div class="profile_content">
								<div class="name">John Doe</div>
								<div class="designation">Admin</div>
							</div>
						</div>
						<i class="bx bx-log-out" id="log_out"></i>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
  
<script>
import 'boxicons/css/boxicons.min.css';

export default {
	data() {
		return {
			isSidebarOpen: false,
		};
	},
	methods: {
		toggleSidebar() {
			this.isSidebarOpen = !this.isSidebarOpen;
		},
	},
};
</script>
  
<style scoped>
.sidebar {
	min-height: 100vh;
	width: 70px;
	padding: 6px 14px;
	z-index: 99;
	background-color: hsl(210, 14%, 97%);
	transition: all .5s ease;
	position: fixed;
	top: 0;
	left: 0;
}

.sidebar.open {
	width: 250px;
}

.sidebar .logo_details {
	height: 60px;
	display: flex;
	align-items: center;
	position: relative;
}

.sidebar .logo_details .icon {
	opacity: 0;
	transition: all 0.5s ease;
}


.sidebar .logo_details .logo_name {
	color: #2A2E34;
	font-size: 22px;
	font-weight: 600;
	opacity: 0;
	transition: all .5s ease;
}

.sidebar.open .logo_details .icon,
.sidebar.open .logo_details .logo_name {
	opacity: 1;
}

.sidebar .logo_details #btn {
	position: absolute;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
	font-size: 23px;
	text-align: center;
	cursor: pointer;
	transition: all .5s ease;
}

.sidebar.open .logo_details #btn {
	text-align: right;
	top: 30px;
	left: 400%;
}

.sidebar i {
	color: #54565C;
	height: 60px;
	line-height: 60px;
	min-width: 42px;
	font-size: 25px;
	text-align: center;
}

.sidebar .nav-list {
	margin-top: 20px;
	height: 100%;
}

.sidebar li {
	position: relative;
	margin: 8px auto;
	list-style: none;
}

.sidebar li .tooltip {
	position: absolute;
	top: -20px;
	left: calc(100% + 15px);
	z-index: 3;
	background-color: #fff;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	padding: 6px 14px;
	font-size: 15px;
	font-weight: 400;
	border-radius: 5px;
	white-space: nowrap;
	opacity: 0;
	pointer-events: none;
}

.sidebar li:hover .tooltip {
	opacity: 1;
	pointer-events: auto;
	transition: all 0.4s ease;
	top: 50%;
	transform: translateY(-50%);
}

.sidebar.open li .tooltip {
	display: none;
}

.sidebar input {
	font-size: 15px;
	color: #2A2E34;
	font-weight: 400;
	outline: none;
	height: 35px;
	width: 35px;
	border: 1px solid #2A2E34;
	border-radius: 5px;
	background-color: hsl(210, 14%, 97%);
	transition: all .5s ease;
}

.sidebar input::placeholder {
	color: #000;
}

.sidebar.open input {
	width: 500%;
	padding: 0 20px 0 50px;
}
input[type="text"],
.form-select,
.input-file {
  border: none;
  /* Change #555 to your desired darker color */
}

.sidebar .bx-search {
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	font-size: 22px;
	/* background-color: hsl(210, 14%, 97%); */
	color: #54565c;
}

.sidebar li a {
	display: flex;
	height: 100%;
	width: 100%;
	align-items: center;
	text-decoration: none;
	/* background-color: hsl(300, 90%, 36%); */
	position: relative;
	transition: all .5s ease;
	z-index: 12;
}

.sidebar li a::after {
	content: "";
	position: absolute;
	width: 500%;
	height: 100%;
	transform: scaleX(0);
	background-color: #E8EAED;
	border-radius: 5px;
	transition: transform 0.3s ease-in-out;
	transform-origin: left;
	z-index: -2;
}

.sidebar li a:hover::after {
	transform: scaleX(1);
	color: #E8EAED;
}

.sidebar li a .link_name {
	color: #2A2E34;
	font-size: 15px;
	font-weight: 400;
	white-space: nowrap;
	pointer-events: auto;
	transition: all 0.4s ease;
	pointer-events: none;
	opacity: 0;
}

.sidebar li a:hover .link_name,
.sidebar li a:hover i {
	transition: all 0.5s ease;
	color: hsl(204, 79%, 47%);
}

.sidebar.open li a .link_name {
	opacity: 1;
	pointer-events: auto;
}

.sidebar li i {
	height: 35px;
	line-height: 35px;
	font-size: 18px;
	border-radius: 5px;
}

.sidebar li.profile {
	position: fixed;
	height: 60px;
	width: 70px;
	left: 0;
	bottom: -8px;
	padding: 10px 14px;
	overflow: hidden;
	transition: all .5s ease;
}

.sidebar.open li.profile {
	width: 250px;
}

.sidebar .profile .profile_details {
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
}

.sidebar li img {
	height: 45px;
	width: 45px;
	object-fit: cover;
	border-radius: 50%;
	margin-right: 10px;
}

.sidebar li.profile .name,
.sidebar li.profile .designation {
	font-size: 15px;
	font-weight: 700;
	color: #000;
	white-space: nowrap;
}

.sidebar li.profile .designation {
	font-size: 12px;
	font-weight: 400;
}

.sidebar .profile #log_out {
	position: absolute;
	top: 60%;
	right: 0;
	transform: translateY(-50%);
	background-color: hsl(210, 14%, 97%);
	width: 100%;
	height: 60px;
	line-height: 60px;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.5s ease;
}

.sidebar.open .profile #log_out {
	width: 20px;
}
</style>
  