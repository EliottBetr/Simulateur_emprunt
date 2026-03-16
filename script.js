function formaterMonnaie(valeur) {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(valeur);
}

function genererTableau() {
    const V0 = parseFloat(document.getElementById('montant').value);
    const tauxAnnuel = parseFloat(document.getElementById('taux').value) / 100;
    const dureeAnnees = parseInt(document.getElementById('duree').value);
    const k = parseInt(document.getElementById('periodicite').value);
    const mode = document.getElementById('mode').value;

    const nTotal = dureeAnnees * k;

    const tauxPeriode = Math.pow(1 + tauxAnnuel, 1 / k) - 1;

    const tbody = document.querySelector('#tableau-emprunt tbody');
    tbody.innerHTML = '';

    let capitalRestant = V0;
    let totalInterets = 0;
    let totalAmortissement = 0;
    let totalAnnuites = 0;

    let annuiteConstante = 0;
    if (mode === 'annuites_constantes') {
        annuiteConstante = V0 * (tauxPeriode / (1 - Math.pow(1 + tauxPeriode, -nTotal)));
    }

    let amortissementConstant = 0;
    if (mode === 'amortissements_constants') {
        amortissementConstant = V0 / nTotal;
    }

    for (let p = 1; p <= nTotal; p++) {
        let interets = capitalRestant * tauxPeriode;
        let amortissement = 0;
        let echeance = 0;

        if (mode === 'annuites_constantes') {
            echeance = annuiteConstante;
            amortissement = echeance - interets;
        } else {
            amortissement = amortissementConstant;
            echeance = amortissement + interets;
        }

        let capitalFin = capitalRestant - amortissement;

        if (p === nTotal) {
            amortissement = capitalRestant;
            echeance = amortissement + interets;
            capitalFin = 0;
        }

        totalInterets += interets;
        totalAmortissement += amortissement;
        totalAnnuites += echeance;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="text-align: center;">${p}</td>
            <td>${formaterMonnaie(capitalRestant)}</td>
            <td>${formaterMonnaie(interets)}</td>
            <td>${formaterMonnaie(amortissement)}</td>
            <td>${formaterMonnaie(echeance)}</td>
            <td>${formaterMonnaie(capitalFin)}</td>
        `;
        tbody.appendChild(tr);

        capitalRestant = capitalFin;
    }

    const trTotal = document.createElement('tr');
    trTotal.style.fontWeight = 'bold';
    trTotal.style.backgroundColor = '#ecf0f1';
    trTotal.innerHTML = `
        <td style="text-align: center;">Total</td>
        <td>-</td>
        <td>${formaterMonnaie(totalInterets)}</td>
        <td>${formaterMonnaie(totalAmortissement)}</td>
        <td>${formaterMonnaie(totalAnnuites)}</td>
        <td>-</td>
    `;
    tbody.appendChild(trTotal);

    document.getElementById('tableau-emprunt').style.display = 'table';
    document.getElementById('summary').innerHTML = `Coût total du crédit (Intérêts) : ${formaterMonnaie(totalInterets)}`;
}
