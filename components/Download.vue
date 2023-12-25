<template>
  <!-- <div>
    <Icon 
      name="iconoir:download" 
      id="dropdownDefaultIcon"
      data-dropdown-toggle="dropdown"
      data-tooltip-target="tooltip-bottom" 
      data-tooltip-placement="bottom" 
      class="text-indigo-500 text-bold cursor-pointer">
    </Icon>
  </div>

    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul class="dropdown" aria-labelledby="dropdownDefaultIcon">
        <li @click="savePDF(elementToExportId, '', pdfname)">
          <span class="dropdown-item">Download PDF (Portrait) </span>
        </li>
        <li @click="savePDF(elementToExportId, 'landscape', pdfname)">
          <span class="dropdown-item">Download PDF (Landscape) </span>
        </li>
      </ul>
    </div>
  <div 
    id="tooltip-bottom" 
    role="tooltip"
    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
    Download
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div> -->
</template>

<script>
// import jsPDF from 'jspdf'

// export default {
//   methods: {
//     savePDF(printSectionID, printOrientation, pdfname) {
//       // Create a new jsPDF instance
//       const pdf = new jsPDF({
//         format: "a4",
//         orientation: printOrientation,
//       });

//       const htmlContent = document.getElementById(printSectionID);

//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = pdf.internal.pageSize.getHeight();

//       // Calculate the scaling factor to fit the content on the A4 page
//       const scaleFactor = pdfWidth / htmlContent.offsetWidth;

//       pdf.html(htmlContent, {
//         callback: function (pdf) {
//           pdf.save(`${pdfname}.pdf`);
//         },
//         x: 0, // X coordinate of the content in the PDF
//         y: 0, // Y coordinate of the content in the PDF
//         html2canvas: {
//           scale: scaleFactor, // Scale the content to fit the page
//         },
//       });
//     },
//   },
// };
</script>
