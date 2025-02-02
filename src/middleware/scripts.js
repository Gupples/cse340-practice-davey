const scripts = (req, res, next) => {
    const mode = process.env.MODE || 'production';
    const port = process.env.PORT || 3000;

    res.locals.inDevMode = mode.includes('development');
    res.locals.devModeMsg = `<p class="dev-mode-msg">Warning: Development Mode
    Enabled🦄</p>`;
    
    res.locals.scripts = [];
    if (res.locals.inDevMode)
    {
        res.locals.scripts.push(`
            <script>
                const ws = new WebSocket('ws://localhost:${parseInt(port) + 1}');
                ws.onclose = () => {
                    setTimeout(() => location.reload(), 2000);
                };
            </script>
            `);
    }

    next();
};

export default scripts;