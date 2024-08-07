let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{D_}", ms: 100 },
    { t: "{DX_}", ms: 100 },
    { t: "{DXV_}", ms: 100 },
    { t: "{DXVV_}", ms: 100 },
    { t: "{DXVVA_}", ms: 100 },
    { t: "{DXVVAY_}", ms: 100 },
    { t: "{DXVVAY }", ms: 200 },
    { t: "{DXVVAY_}", ms: 200 },
    { t: "{DXVVAY }", ms: 200 },
    { t: "{DXVVAY_}", ms: 200 },
    { t: "{DXVVAY}", ms: 200 },
    { t: "{DXVVAY}", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();