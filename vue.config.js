module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/tapioka-task-app/'
        : '/',
    outputDir: 'docs',
};