document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.jsapp-box');
    const baseFontSize = parseFloat(window.getComputedStyle(document.body).fontSize) || 16;
    boxes.forEach(box => {
        const pxWidth = parseInt(box.dataset.width, 10) || 400;
        const pxHeight = parseInt(box.dataset.height, 10) || 300;
        const emWidth = (pxWidth / baseFontSize).toFixed(2) + 'em';
        const emHeight = (pxHeight / baseFontSize).toFixed(2) + 'em';
        box.style.width = emWidth;
        box.style.height = emHeight;
    });
});


function appScriptLauncher(app) {
    const container = document.getElementById('app-container-' + app);
    const panel = document.createElement('div');
    panel.id = '__panel__';
    container.appendChild(panel);
    const script = document.createElement('script');
    script.type = 'module';
    script.src = appSource(app + '.js')
    container.appendChild(script);
    document.getElementById('launch-button').style.display = 'none';
    document.getElementById('app-title').style.display = 'none';
}


function appFrameLauncher(app) {
    const container = document.getElementById('app-container-' + app);
    container.style.backgroundColor = '#272b30';
    document.getElementById('launch-button').style.display = 'none';
    document.getElementById('app-title').style.display = 'none';
    let pxWidth = parseInt(container.dataset.width, 10) || 400;
    let pxHeight = parseInt(container.dataset.height, 10) || 300;
    pxWidth = (pxWidth + 16).toString() + 'px';
    pxHeight = (pxHeight + 16).toString() + 'px';
    const source = appSource(app + '.html');
    container.innerHTML = '<pre><iframe id=' + app + ' name=' + app + ' src=' + source + ' width=' + pxWidth + ' height=' + pxHeight + '></iframe></pre>';
}


function appSource(app) {
    const source = {
    'serpentduel.js': '/apps/pyjsdl-ts/serpentduel/__target__/' + app,
    'biomorph-entity.js': '/apps/pyjsdl-ts/biomorph-entity-app/__target__/' + app,
    'biomorph-evolve.js': '/apps/pyjsdl-ts/biomorph-evolve-app/__target__/' + app,
    'brownian.js': '/apps/pyjsdl-ts/brownian-motion-app/__target__/' + app,
    'serpentduel.html': '/apps/pyjsdl/serpentduel/' + app,
    'draw-pad.js': '/apps/pyjsdl-ts/draw-pad/__target__/' + app,
    'serpentduel-app.html': '/apps/pyjsdl/app/' + app,
    'microbe-bacterium-app.html': '/apps/pyjsdl/app/' + app,
    'biomorph.html': '/apps/pyjsdl/biomorph/' + app,
    'cell.html': '/apps/pyjsdl/cell/' + app, 
    'nexus.html': '/apps/pyjsdl/nexus/' + app,
    'interphase-demo.html': '/apps/pyjsdl/app/' + app,
    'chimp.html': '/apps/pyjsdl/demo/' + app,
    'aliens.html': '/apps/pyjsdl/demo/' + app,
    'stars.html': '/apps/pyjsdl/demo/' + app
    };
    return source[app];
}


function appletLauncher(app,appCode,appWidth,appHeight) {
    const container = document.getElementById(app);
    const archive = appletSource(app);
    const codebase = '/apps/pyj2d/';
    const code = appCode || 'Applet.class';
    const width = appWidth || '400';
    const height = appHeight || '300';
    container.innerHTML = '<applet width=' + width + ' height=' + height + ' codebase=' + codebase + ' code=' + code + ' archive=' + archive + ' alt="Requires JVM">';
}


function appletSource(app) {
    const source = {
        'pyj2d-applet': 'pyj2d-applet-0.23.jar,jython.jar,pyj2d-0.23.jar',
        'microbe': 'microbe.jar,jython.jar,pyj2d.jar',
        'biomorph': 'biomorph.jar,jython.jar,pyj2d.jar',
        'interphase-demo': 'interphase-demo.jar,jython.jar,interphase.jar,pyj2d.jar'
    };
    return source[app];
}

