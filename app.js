// https://calculator.swiftutors.com/cost-per-impression-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const costPerImpressionRadio = document.getElementById('costPerImpressionRadio');
const advertisingCostRadio = document.getElementById('advertisingCostRadio');
const totalImpressionsRadio = document.getElementById('totalImpressionsRadio');

let costPerImpression;
let advertisingCost = v1;
let totalImpressions = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

costPerImpressionRadio.addEventListener('click', function() {
  variable1.textContent = 'Advertising Cost ($)';
  variable2.textContent = 'Total Impressions';
  advertisingCost = v1;
  totalImpressions = v2;
  result.textContent = '';
});

advertisingCostRadio.addEventListener('click', function() {
  variable1.textContent = '(CPI) Cost Per Impression ($)';
  variable2.textContent = 'Total Impressions';
  costPerImpression = v1;
  totalImpressions = v2;
  result.textContent = '';
});

totalImpressionsRadio.addEventListener('click', function() {
  variable1.textContent = '(CPI) Cost Per Impression ($)';
  variable2.textContent = 'Advertising Cost ($)';
  costPerImpression = v1;
  advertisingCost = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(costPerImpressionRadio.checked)
    result.textContent = `Cost Per Impression = ${computeCostPerImpression().toFixed(2)}`;

  else if(advertisingCostRadio.checked)
    result.textContent = `Advertising Cost = ${computeAdvertisingCost().toFixed(2)}`;

  else if(totalImpressionsRadio.checked)
    result.textContent = `Total Impressions = ${computeTotalImpressions().toFixed(2)}`;
})

// calculation

function computeCostPerImpression() {
  return Number(advertisingCost.value) / Number(totalImpressions.value);
}

function computeAdvertisingCost() {
  return Number(costPerImpression.value) * Number(totalImpressions.value);
}

function computeTotalImpressions() {
  return Number(advertisingCost.value) / Number(costPerImpression.value);
}