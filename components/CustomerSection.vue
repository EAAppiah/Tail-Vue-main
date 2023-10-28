<template>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 my-2">

		<!-- Customer Display Form -->
		<div class="max-w-md p-6 border border-gray-300 md:rounded-lg shadow-xl align-middle inline-block min-w-full">
			<h3 class="text-left text-xl font-normal text-purple-500 mb-2">PERSONAL INFO:</h3>
			<div style="display: flex; justify-content: space-between; font-size: 14px;" class="personal-info text-xl">
				<div>
					<strong>Name:</strong> <span>{{ customer.name }}</span>
				</div>
				<div>
					<strong>Phone:</strong> <span>{{ customer.phone }}</span>
				</div>
				<div>
					<strong>Sex:</strong> <span>{{ customer.sex }}</span>
				</div>
			</div>

			<h3 class="text-left text-xl text-purple-500 font-normal mt-3">MEDICAL INFO:</h3>
			<div style="display: flex; justify-content: space-between; font-size: 14px;" class="personal-info text-xl">
				<div class="mb-4">
					<strong>Insurance Provider:</strong> <span>{{ customer.insuranceProvider }}</span>
				</div>
				<div class="mb-4">
					<strong>#Insurance:</strong> <span>{{ customer.insuranceNumber }}</span>
				</div>
				<div class="mb-4">
					<strong>Condition:</strong> <span>{{ customer.condition }}</span>
				</div>
			</div>

			<!--CUSTOMER REFILL TABLE-->
			<div class="flex flex-col mt-8">
				<div class="-my-2 py-2 overflow-x-auto md:-mx-4 md:px-4 lg:-mx-8 lg:px-8">
					<div class="align-middle inline-block min-w-full shadow overflow-hidden md:rounded-lg border border-gray-300">
						<h1 class="text-center text-xl font-medium text-purple-700 my-2">CUSTOMER REFILLS</h1>
						<table class="min-w-full">
							<!-- TABLE header -->
							<thead>
								<tr>
									<th class="px-4 py-2 border-b bg-gray-100 text-xs">
										Date
									</th>
									<th class="px-4 py-2 border-b bg-gray-100 text-xs">
										Product
									</th>
									<th class="px-4 py-2 border-b bg-gray-100 text-xs">
										Unit#
									</th>
									<th class="px-4 py-2 border-b bg-gray-100 text-xs">
										Qty Bought
									</th>
									<th class="px-4 py-2 border-b bg-gray-100 text-xs">
										Refill Date
									</th>
								</tr>
							</thead>
							<tbody class="bg-white">
								<!-- Table rows -->
								<tr v-for="(refill, index) in refills" :key="index">
									<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
										<div class="text-center font-medium text-gray-900">
											{{ refill.date }}
										</div>
									</td>
									<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
										<div class="text-center font-medium text-gray-900">
											{{ refill.product }}
										</div>
									</td>
									<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
										<div class="text-center font-medium text-gray-900">
											{{ refill.unit }}
										</div>
									</td>
									<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
										<div class="text-center font-medium text-gray-900">
											{{ refill.qtyBought }}
										</div>
									</td>
									<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
										<div class="text-center font-medium text-gray-900">
											{{ refill.refillDate }}
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

		</div>


		<!-- PURCHASE HISTORY TABLE -->

		<div class="sm:mt-0">
			<div class="flex flex-col">
				<div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
					<div
						class="custom-min-width align-middle inline-block border border-gray-300 sm:rounded-lg shadow-lg overflow-hidden">
						<h1 class="text-center text-xl font-medium text-purple-700 mt-2 mb-4">PURCHASE HISTORY</h1>

						<div
							class="border border-gray-300 shadow flex flex-col md:flex-row justify-around p-2 my-4 mx-4 overflow-hidden sm:rounded-lg">
							<span class="text-center">
								Total
								<span class="font-bold">
									Cost
								</span>
								<br>
								<span class="font-bold text-green-500">
									GHS {{ totalCost.toFixed(2) }}
								</span>
							</span>

							<span class="text-center mt-4 md:mt-0">
								Total
								<span class="font-bold">
									Paid
								</span>
								<br>
								<span class="font-bold text-blue-500">
									GHS {{ totalPaid.toFixed(2) }}
								</span>
							</span>

							<span class="text-center mt-4 md:mt-0">
								Total
								<span class="font-bold">
									Balance <!--Balance-->
								</span>
								<br>
								<span class="font-bold text-red-500">
									GHS {{ balance.toFixed(2) }}
								</span>
							</span>
						</div>

						<table class="min-w-full">
							<!-- Table header -->
							<thead>
								<tr>
									<th class="px-4 py-2 border-b bg-gray-100">
										Date
									</th>
									<th class="px-4 py-2 border-b bg-gray-100">
										Receipt
									</th>
									<th class="px-4 py-2 border-b bg-gray-100">
										#Prod <!--Product Amount-->
									</th>
									<th class="px-4 py-2 border-b bg-gray-100">
										Cost
									</th>
									<th class="px-4 py-2 border-b bg-gray-100">
										Disc% <!--Discount-->
									</th>
									<th class="px-4 py-2 border-b bg-gray-100">
										Amt Paid
									</th>
									<th class="px-4 py-2 border-b bg-gray-100">
										Bal <!--Balance-->
									</th>
								</tr>
							</thead>

							<tbody class="bg-white">
								<!-- Table rows -->
								<tr v-for="(purchase, index) in purchases" :key="index">
									<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
										<div class="text-center font-medium text-gray-900">
											{{ purchase.date }}
										</div>
									</td>
									<td class="px-4 py-2 flex justify-center items-center whitespace-no-wrap border-b border-gray-200">
										<button
											class="px-2 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
											@click="openReceiptPopup(purchase)">View
										</button>
									</td>
									<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
										<div class="text-center font-medium text-gray-900">
											{{ purchase.productNumber }}
										</div>
									</td>
									<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
										<div class="text-center font-medium text-gray-900">
											{{ purchase.cost.toLocaleString() }}
										</div>
									</td>
									<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
										<div class="text-center font-medium text-gray-900">
											{{ purchase.disc.toLocaleString() }}
										</div>
									</td>
									<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
										<div class="text-center font-medium text-gray-900">
											{{ purchase.amtPaid.toLocaleString() }}
										</div>
									</td>
									<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
										<div class="text-center font-medium text-gray-900">
											{{ purchase.bal.toLocaleString() }}
										</div>
									</td>
									<!-- Add more table cells for other columns -->
								</tr>
								<!-- End of table rows -->
							</tbody>
							<!-- End of table body -->
						</table>
					</div>
				</div>
			</div>
			<!-- End of Table -->
		</div>
	</div>

	<!-- RECEIPT POPUP -->
	<div v-if="isReceiptPopupVisible" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
		<div class="bg-white rounded-lg p-8 shadow-md max-w-3xl mx-auto max-h-120 overflow-y-auto">
			<div class="relative">
				<button class="absolute top-[-1.9rem] right-[-1.9rem] px-2 py-1 bg-red-500 text-white rounded-md"
					@click="closeReceiptPopup">&times;</button>
				<h2 class="text-lg font-semibold">{{ selectedPurchaseForReceipt.receipt }} Receipt</h2>
				<table class="min-w-full mt-4">
					<thead>
						<tr>
							<th class="px-4 py-2 border-b bg-gray-100 text-xs">
								Product
							</th>
							<th class="px-4 py-2 border-b bg-gray-100 text-xs">
								Qty
							</th>
							<th class="px-4 py-2 border-b bg-gray-100 text-xs">
								Unit
							</th>
							<th class="px-4 py-2 border-b bg-gray-100 text-xs">
								Cost
							</th>
							<th class="px-4 py-2 border-b bg-gray-100 text-xs">
								Disc
							</th>
							<th class="px-4 py-2 border-b bg-gray-100 text-xs">
								Amt Paid
							</th>
							<th class="px-4 py-2 border-b bg-gray-100 text-xs">
								Bal <!--Balance-->
							</th>
							<th class="px-4 py-2 border-b bg-gray-100 text-xs">
								Returns
							</th>
						</tr>
					</thead>
					<tbody>
						<!-- Loop through user's status details -->
						<tr v-for="(receiptDetail, index) in selectedPurchaseForReceipt.receiptDetails" :key="index">
							<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
								<div class="text-center font-medium text-gray-900">
									{{ receiptDetail.product }}
								</div>
							</td>
							<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
								<div class="text-center font-medium text-gray-900">
									{{ receiptDetail.quantity }}
								</div>
							</td>
							<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
								<div class="text-center font-medium text-gray-900">
									{{ receiptDetail.unit }}
								</div>
							</td>
							<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
								<div class="text-center font-medium text-gray-900">
									{{ receiptDetail.cost }}
								</div>
							</td>
							<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
								<div class="text-center font-medium text-gray-900">
									{{ receiptDetail.disc }}
								</div>
							</td>
							<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
								<div class="text-center font-medium text-gray-900">
									{{ receiptDetail.amtPaid }}
								</div>
							</td>
							<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
								<div class="text-center font-medium text-gray-900">
									{{ receiptDetail.bal }}
								</div>
							</td>
							<td class="px-4 py-2 whitespace-no-wrap border-b border-gray-200">
								<button
									class="px-2 py-1 flex justify-center bg-gray-400 font-bold rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
									@click="openDigitalModal()">Return</button>
							</td>

						</tr>

						<!-- Calculate and display receipt totals -->
						<tr>
							<td colspan="3" class="text-md font-bold">Totals:</td>
							<td class="font-bold text-sm text-green-500 text-center total-cell">
								{{ calculateTotal('cost', selectedPurchaseForReceipt.receiptDetails).toLocaleString() }}
							</td>
							<td class="font-bold text-sm text-blue-500 text-center total-cell">
								{{ calculateTotal('disc', selectedPurchaseForReceipt.receiptDetails).toLocaleString() }}
							</td>
							<td class="font-bold text-sm text-purple-500 text-center total-cell">
								{{ calculateTotal('amtPaid', selectedPurchaseForReceipt.receiptDetails).toLocaleString() }}
							</td>
							<td class="font-bold text-sm text-red-500 text-center total-cell">
								{{ calculateTotal('bal', selectedPurchaseForReceipt.receiptDetails).toLocaleString() }}
							</td>
						</tr>
					</tbody>
				</table>
				<div class="receipt__btn">
					<button
						class="px-2 py-1 flex justify-center bg-yellow-500 font-bold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300"
						@click="openMomoPopup">Momo</button>
					<button
						class="px-2 py-1 flex justify-center bg-green-500 font-bold text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
						@click="openCashPopup">Cash</button>
				</div>
			</div>
		</div>
	</div>

	<!-- MOMO POPUP -->
	<div v-if="isMomoPopupVisible" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
		<div class="bg-white rounded-lg p-6 shadow-md w-5/6 max-w-3xl h-auto overflow-y-auto">
			<div class="relative">
				<button class="absolute top-[-1.4rem] right-[-1.4rem] px-2 py-1 bg-red-500 text-white rounded-md"
					@click="closeMomoPopup">&times;</button>
				<h2 class="text-xl">Mobile Money Payment</h2>
			</div>

			<div class="mt-5">
				<hr>
				<div class="my-2 text-center text-purple-500 text-2xl">
					{{ customer.name }}
				</div>
			</div>
			<hr>
			<div class="col-span-12">
				<div class="mx-auto">
					<div class="my-4 text-center flex justify-between text-lg">
						<strong>Credited Amount:</strong>
						<span class="font-bold text-lg">GHS {{ calculateTotal('cost',
							selectedPurchaseForReceipt.receiptDetails).toLocaleString() }}</span>
					</div>
					<div class="my-4 text-center mb-2 flex justify-between text-lg">
						<strong>Total Amount Paid:</strong>
						<span class="font-bold text-lg">GHS {{ calculateTotal('amtPaid',
							selectedPurchaseForReceipt.receiptDetails).toLocaleString() }}</span>
					</div>
					<div class="my-4 text-center mb-2 flex justify-between text-lg">
						<strong>Balance:</strong>
						<span class="font-bold text-lg">GHS {{ balance.toLocaleString() }}</span>
					</div>
				</div>
			</div>

			<!-- Dropdown Select -->
			<div class="my-4 flex justify-between">
				<div>
					<label for="receiptAccount" class="block font-bold text-lg">Select Receipt Account:</label>
					<select id="receiptAccount" name="receiptAccount"
						class="mt-2 block w-48 p-2 border rounded-md shadow-sm focus:ring focus:ring-purple-300 focus:outline-none">
						<option value="Shop 1">Shop 1</option>
						<option value="Shop 2">Shop 2</option>
						<option value="Shop 3">Shop 3</option>
					</select>
				</div>
				<div>
					<!-- Amount Received Input -->
					<div class="my-4">
						<label for="amountReceived" class="block font-bold text-lg">Amount Received:</label>
						<input id="amountReceived" name="amountReceived" type="number"
							class="mt-2 block p-2 border rounded-md shadow-sm focus:ring focus:ring-purple-300 focus:outline-none w-48"
							value="0">
					</div>
				</div>
			</div>
			<div class="flex items-center justify-center">
				<button
					class="px-10 py-2 flex justify-center bg-purple-600 font-medium text-white rounded-md hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-300">Make
					Payment
				</button>
			</div>
		</div>
	</div>


	<!-- CASH POPUP -->
	<div v-if="isCashPopupVisible" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
		<div class="bg-white rounded-lg p-6 shadow-md w-5/6 max-w-3xl h-auto overflow-y-auto">
			<div class="relative">
				<button class="absolute top-[-1.4rem] right-[-1.4rem] px-2 py-1 bg-red-500 text-white rounded-md"
					@click="closeCashPopup">&times;</button>
				<h2 class="text-xl">Cash Payment</h2>
			</div>

			<div class="mt-5">
				<hr>
				<div class="my-2 text-center text-purple-500 text-2xl">
					{{ customer.name }}
				</div>
			</div>
			<hr>
			<div class="col-span-12">
				<div class="mx-auto">
					<div class="my-4 text-center flex justify-between text-lg">
						<strong>Credited Amount:</strong>
						<span class="font-bold text-lg">GHS {{ calculateTotal('cost',
							selectedPurchaseForReceipt.receiptDetails).toLocaleString() }}</span>
					</div>
					<div class="my-4 text-center mb-2 flex justify-between text-lg">
						<strong>Total Amount Paid:</strong>
						<span class="font-bold text-lg">GHS {{ calculateTotal('amtPaid',
							selectedPurchaseForReceipt.receiptDetails).toLocaleString() }}</span>
					</div>
					<div class="my-4 text-center mb-2 flex justify-between text-lg">
						<strong>Balance:</strong>
						<span class="font-bold text-lg">GHS {{ balance.toLocaleString() }}</span>
					</div>
				</div>
			</div>
			<!-- Amount Received Input -->
			<div class="my-4">
				<label for="amountReceived" class="block font-bold text-lg">Cash Tendered:</label>
				<input id="amountReceived" name="amountReceived" type="number"
					class="mt-2 block p-2 border rounded-md shadow-sm focus:ring focus:ring-purple-300 focus:outline-none w-48"
					value="0">
			</div>
			<div class="flex items-center justify-center">
				<button
					class="px-10 py-2 flex justify-center bg-purple-700 font-medium text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300">Make
					Payment
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		// Customer Display Info
		return {
			customer: {
				name: 'Robert Covington',
				condition: 'Dyslexia',
				sex: 'Male',
				insuranceProvider: 'Glico',
				insuranceNumber: '12345',
				phone: '020-456-7956'
			},

			// Customer Product History
			purchases: [
				{
					date: this.formatDate(new Date()),
					productNumber: '3',
					receiptDetails: [
						{ product: 'Methamphethamine', quantity: '2', unit: '60ml', cost: '200', disc: '3.00', amtPaid: '50', bal: '187' },
						{ product: 'Zincovite', quantity: '10', unit: '100ml', cost: '50', disc: '1.50', amtPaid: '28', bal: '20.50' },
						{ product: 'Tramadol', quantity: '5', unit: '100ml', cost: '250', disc: '5.50', amtPaid: '100', bal: '104.50' },
					],
					cost: '500',
					disc: '10',
					amtPaid: '178',
					bal: '312'
				},
				{
					date: this.formatDate(new Date()),
					productNumber: '2',
					receiptDetails: [
						{ product: 'Paracetamol', quantity: '4', unit: '20ml', cost: '10', disc: '0.30', amtPaid: '5', bal: '4.70' },
						{ product: 'Aspirin', quantity: '3', unit: '200ml', cost: '900', disc: '25.00', amtPaid: '500', bal: '375' }
					],
					cost: '910',
					disc: '25.30',
					amtPaid: '505',
					bal: '379.70'
				},
			],
			refills: [
				{
					date: this.formatDate(new Date()),
					product: 'Zincovite',
					unit: '400ml',
					qtyBought: '2',
					refillDate: "2023-11-15",
				},
				{
					date: this.formatDate(new Date()),
					product: 'Aspirin',
					unit: 'Tablet (100mg)',
					qtyBought: '30',
					refillDate: null,
				},
				{
					date: this.formatDate(new Date()),
					product: 'Ibuprofen',
					unit: 'Tablet (200mg)',
					qtyBought: '20',
					refillDate: "2023-12-30",
				},
				{
					date: this.formatDate(new Date()),
					product: 'Amoxicillin',
					unit: 'Capsule (500mg)',
					qtyBought: '15',
					refillDate: "2023-11-28",
				},
				{
					date: this.formatDate(new Date()),
					product: 'Paracetamol',
					unit: 'Tablet (500mg)',
					qtyBought: '25',
					refillDate: null,
				},
			],
			isReceiptPopupVisible: false,
			isMomoPopupVisible: false,
			isCashPopupVisible: false,
			selectedPurchaseForReceipt: null,
		};
	},

	computed: {
		totalCost() {
			return this.purchases.reduce((total, purchase) => total + (parseFloat(purchase.cost) - parseFloat(purchase.disc)), 0);
		},
		totalPaid() {
			return this.purchases.reduce((total, purchase) => total + parseFloat(purchase.amtPaid), 0);
		},
		balance() {
			return this.totalCost - this.totalPaid;
		},
		creditedAmountFromReceipt() {
			// Calculate credited amount based on the selected purchase
			if (this.selectedPurchaseForReceipt) {
				return this.selectedPurchaseForReceipt.cost - this.selectedPurchaseForReceipt.disc;
			}
			return 0;
		},
	},

	methods: {
		formatDate(date) {
			const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
			const dayOfWeek = days[date.getDay()];
			const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			const month = months[date.getMonth()];
			const dayOfMonth = date.getDate();
			const dayOfMonthFormatted = dayOfMonth + (dayOfMonth === 1 ? 'st' : dayOfMonth === 2 ? 'nd' : dayOfMonth === 3 ? 'rd' : 'th');

			return `${dayOfWeek}-${dayOfMonthFormatted}-${month}`;
		},

		// Method to open the receipt popup
		openReceiptPopup(purchase) {
			this.selectedPurchaseForReceipt = purchase;
			this.isReceiptPopupVisible = true;
		},

		// Method to close the receipt popup
		closeReceiptPopup() {
			this.isReceiptPopupVisible = false; // Hide the receipt popup
		},

		calculateTotal(property, receiptDetails) {
			return receiptDetails.reduce((total, detail) => total + parseFloat(detail[property]), 0);
		},

		// Method to open the momo popup
		openMomoPopup() {
			this.isMomoPopupVisible = true;
		},
		// Method to close the momo popup
		closeMomoPopup() {
			this.isMomoPopupVisible = false;
		},

		// Method to open the Cash popup
		openCashPopup() {
			this.isCashPopupVisible = true;
		},
		// Method to close the Cash popup
		closeCashPopup() {
			this.isCashPopupVisible = false;
		},
	},

};
</script>

<style scoped>
html,
body {
	overflow: hidden;
	height: 100%;
}

.personal-info span {
	font-size: 16px;
}

table {
	font-size: 12px;
	max-height: calc(100% - 2rem);
	/* Adjust this value as needed */
	overflow-y: auto;

}

.receipt__btn {
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
}

th {
	font-size: 16px;
}

.total-cell {
	background-color: #f0f0f0;
	/* Change this to the background color you prefer */
	font-weight: bold;
	color: #333;
}

.grid {
	height: calc(95vh - 4rem);
	/* Adjust this value as needed */
	overflow: hidden;
}

/* Set a fixed height for the customer display and purchase history sections */
.max-w-md {
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.custom-min-width {
	min-width: 97%;
}
</style>