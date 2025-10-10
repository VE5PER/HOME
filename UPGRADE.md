# Upgrading Your Personal Website Content

This website is currently using placeholder data. To populate it with your own information, please follow these steps:

## 1. Update JSON Data Files

All the content for the website is stored in JSON files located in the `src/data/` directory. You will need to edit these files to reflect your personal information.

- `site.json`: Contains your name, title, contact information, and social media links.
- `skills.json`: A list of your skills, categorized for display on the 'About' page.
- `projects.json`: A list of your projects, including descriptions, technologies used, and links.
- `publications.json`: Your academic publications.
- `experience.json`: Your work experience and education history.

## 2. Add Your Resume

Place your resume in the `public/` directory. The download button on the website is configured to link to a file named `Saurav_Shyju_Resume.pdf` in this directory. If your resume has a different name, you will need to update the link in the `src/components/Hero.tsx` component.

## 3. Add Images

- **Headshot**: Place your headshot image in the `public/` directory and update the path in the `src/components/Hero.tsx` component.
- **Project Images**: For each project in `projects.json`, you can add images to the `public/images/projects/` directory and reference them in the `images` array for each project.
