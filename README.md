# CoC Hymns Lyric Video Generation Codebase For The Church At KNUST

## Dependencies

- Node 20 and above (with npm)
- Git

## To get started

- Clone the codebase
- Install dependencies from the root of the project using `npm install`
- Run `npm start` to start the dev server

## To add/work on a new project

- Create a new project file in [src/projects](src/projects) (use one of the existing projects as a template)
- Add a new entry (string representing the relative path to the project file created in the previous step) to the `projects` array in [vite.config.ts](vite.config.ts)
- Start the dev server (if it hasn't already been started) and select the project in the browser interface
- Make modifications to the project and check the results until you're satisfied with the output
- Click `Render` to render the video to the [output](output) directory (make sure `include audio` is checked and the `exporter` option is set to `Video (FFmpeg)`)
- Check the resulting video to make sure you're satisfied with the final result
