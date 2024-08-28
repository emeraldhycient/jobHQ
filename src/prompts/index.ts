// const prompts = {
//     learningPath: (topic: string, additionalData: { focusArea?: string; experienceLevel?: string }) => {
//         const { focusArea, experienceLevel } = additionalData;

import { ICoverLetterPromptProps, IResumePromptProps } from "@/constants/interface";

//         return `
// You are an advanced AI content generator for educational platforms. Your task is to create a highly structured, well-formatted, and detailed JSON output that represents a learning roadmap for the topic "${topic}". This roadmap is intended for ${experienceLevel || 'learners'} and must adhere strictly to the provided JSON format.

// **Focus Area**: ${focusArea || 'Comprehensive coverage of the entire topic'}

// ### JSON Format Guidelines:
// 1. The JSON must be valid and free from extraneous symbols or malformed data.
// 2. Each field should be populated correctly, according to the specified type (e.g., strings, arrays).
// 3. If data is missing, use an empty string, empty array, or null, but do not omit the keys.
// 4. Ensure that the JSON is well-structured, with no missing commas, misplaced brackets, or incorrect syntax.
// 5. Populate each section fully, especially in the "roadmap" array, which should include multiple core topics and subtopics.

// ### JSON Output Structure:

// \`\`\`json
// {
//   "title": "Learning Path Title",
//   "description": "An overview of the learning path, detailing key concepts and skills to be acquired.",
//   "roadmap": [
//     {
//       "step": 1,
//       "title": "Core Topic Title",
//       "keyConcepts": ["Concept 1", "Concept 2"],
//       "resources": [
//         {
//           "resourceType": "Type of Resource (e.g., Books, Courses)",
//           "links": ["https://example.com/resource"]
//         }
//       ],
//       "subtopics": [
//         {
//           "substep": 1.1,
//           "title": "Subtopic Title",
//           "description": "Detailed explanation of the subtopic.",
//           "keyConcepts": ["Subtopic Concept 1", "Subtopic Concept 2"],
//           "images": ["https://example.com/image.jpg"],
//           "videos": ["https://example.com/video.mp4"],
//           "links": ["https://example.com/link"],
//           "text": ["Detailed notes for the subtopic."],
//           "practiceQuestions": [
//             {
//               "question": "Sample question about the subtopic.",
//               "answer": "The correct answer."
//             }
//           ],
//           "estimatedTime": "2 hours"
//         }
//       ],
//       "projectIdeas": [
//         {
//           "ideaTitle": "Project Idea Title",
//           "description": "Brief description of the project idea."
//         }
//       ]
//     },
//     {
//       "step": 2,
//       "title": "Next Core Topic Title",
//       "keyConcepts": ["Concept 1", "Concept 2"],
//       "resources": [
//         {
//           "resourceType": "Type of Resource (e.g., Books, Courses)",
//           "links": ["https://example.com/resource"]
//         }
//       ],
//       "subtopics": [
//         {
//           "substep": 2.1,
//           "title": "Next Subtopic Title",
//           "description": "Detailed explanation of the subtopic.",
//           "keyConcepts": ["Subtopic Concept 1", "Subtopic Concept 2"],
//           "images": ["https://example.com/image.jpg"],
//           "videos": ["https://example.com/video.mp4"],
//           "links": ["https://example.com/link"],
//           "text": ["Detailed notes for the subtopic."],
//           "practiceQuestions": [
//             {
//               "question": "Sample question about the subtopic.",
//               "answer": "The correct answer."
//             }
//           ],
//           "estimatedTime": "3 hours"
//         }
//       ],
//       "projectIdeas": [
//         {
//           "ideaTitle": "Another Project Idea Title",
//           "description": "Brief description of the project idea."
//         }
//       ]
//     }
//   ],
//   "overallEstimatedCompletionTime": "Total time estimate for completing the entire learning path."
// }
// \`\`\`

// ### Additional Instructions:
// - Make sure the "roadmap" array contains multiple core topics (at least 2-3) with their respective subtopics.
// - Populate all fields according to the structure, and ensure each subtopic and core topic is clearly and fully described.
// - Avoid using any special characters or symbols that could corrupt the JSON output.
// - Review the entire JSON structure before returning it to ensure it adheres to the provided example.

// The output must be a valid JSON object, strictly following the structure and guidelines provided.
// `;
//     }
// };


// export default prompts


const prompts = {
  learningPath: (topic: string, additionalData: { focusArea?: string; experienceLevel?: string }) => {
    const { focusArea, experienceLevel } = additionalData;

    return `
You are an advanced AI content generator for educational platforms. Your task is to create a structured, well-formatted, and detailed JSON output that represents a learning roadmap for the topic "${topic}". This roadmap is intended for ${experienceLevel || 'learners'} and must adhere strictly to the provided JSON format.

**Focus Area**: ${focusArea || 'Comprehensive coverage of the entire topic'}

### JSON Format Guidelines:
1. **Strictly follow** the JSON structure provided in the example. Do not deviate from the specified format or add any additional symbols, characters, or keys.
2. Use **valid JSON** syntax, ensuring correct use of commas, colons, brackets, and quotes.
3. If data is missing for a field, use an empty string ("") or an empty array ([]), but do not omit the key.
4. Each field should have the correct data type:
   - Strings: e.g., "This is a string."
   - Arrays: e.g., ["item1", "item2"]
5. Make sure all sections, including titles, descriptions, resources, and subtopics, are clearly defined and fully described.

### Example JSON Output:

\`\`\`json
{
  "title": "Learning Path Title",
  "description": "An overview of the learning path, detailing key concepts and skills to be acquired.",
    "banner":"art design url to represent this learning path"
  "roadmap": [
    {
      "step": 1,
      "title": "Core Topic Title",
      "keyConcepts": ["Concept 1", "Concept 2"],
      "resources": [
        {
          "resourceType": "Type of Resource (e.g., Books, Courses)",
          "links": ["https://example.com/resource"]
        }
      ],
      "subtopics": [
        {
          "substep": 1.1,
          "title": "Subtopic Title",
          "description": "Detailed explanation of the subtopic.",
          "keyConcepts": ["Subtopic Concept 1", "Subtopic Concept 2"],
          "images": ["https://example.com/image.jpg"],
          "videos": ["https://example.com/video.mp4"],
          "links": ["https://example.com/link"],
          "text": ["Detailed notes for the subtopic."],
          "practiceQuestions": [
            {
              "question": "Sample question about the subtopic.",
              "answer": "The correct answer."
            }
          ],
          "estimatedTime": "2 hours"
        }
      ],
      "projectIdeas": [
        {
          "ideaTitle": "Project Idea Title",
          "description": "Brief description of the project idea."
        }
      ]
    },
    {
      "step": 2,
      "title": "Next Core Topic Title",
      "keyConcepts": ["Concept 1", "Concept 2"],
      "resources": [
        {
          "resourceType": "Type of Resource (e.g., Books, Courses)",
          "links": ["https://example.com/resource"]
        }
      ],
      "subtopics": [
        {
          "substep": 2.1,
          "title": "Next Subtopic Title",
          "description": "Detailed explanation of the subtopic.",
          "keyConcepts": ["Subtopic Concept 1", "Subtopic Concept 2"],
          "images": ["https://example.com/image.jpg"],
          "videos": ["https://example.com/video.mp4"],
          "links": ["https://example.com/link"],
          "text": ["Detailed notes for the subtopic."],
          "practiceQuestions": [
            {
              "question": "Sample question about the subtopic.",
              "answer": "The correct answer."
            }
          ],
          "estimatedTime": "3 hours"
        }
      ],
      "projectIdeas": [
        {
          "ideaTitle": "Another Project Idea Title",
          "description": "Brief description of the project idea."
        }
      ]
    }
  ],
  "overallEstimatedCompletionTime": "Total time estimate for completing the entire learning path."
}
\`\`\`

### Additional Instructions:
- Make sure the "roadmap" array contains multiple core topics (at least 10-40) with their respective subtopics.
- Fully populate all fields according to the structure, ensuring that each subtopic and core topic is clearly and fully described.
- Review the entire JSON structure before returning it to ensure it adheres to the provided example.
- Make sure each subtopic contains atleast 5 pratice questions and answers
- Make sure to include atleast 5 project ideas
- Make sure that every array has not less than 5 items inside 
- Esure all links are viable and with no dummy items
- Avoid using any special characters, unusual symbols, or formatting styles that could corrupt the JSON output.

### Validations:
- Ensure that every object and array in the JSON is closed correctly.
- All text should be clear and should not include special formatting like markdown or HTML unless specified.

The output must be a valid JSON object, strictly following the structure and guidelines provided.
`;
  },




resumePrompt: function generateEnhancedResumePrompt({
  language,
  tone,
  resume,
  jobDescription,
  wordLimit,
  numberOfResults,
  creativityLevel
}: IResumePromptProps): string {
  return `
    I need to create a highly optimized and professional resume for a job applicant targeting roles at top-tier technology companies like FAANG and MAANG. Please use the following guidelines and details to craft the resume:

    **User-Provided Information:**
    - **Current Resume Content:** ${resume}
    - **Target Job Description:** ${jobDescription}

    **Specific Instructions:**
    1. **Language and Tone**: The resume should be written in ${language} with a ${tone} tone. It should be polished, articulate, and reflect the professionalism expected in top-tier technology companies.
    2. **Structure and Format**:
        - **Contact Information**: Display clearly at the top, including name, email, phone number, LinkedIn profile, and any relevant portfolio links.
        - **Professional Summary**: Craft a compelling summary that highlights the candidate's top skills, achievements, and career objectives in alignment with the job description. Keep this concise but impactful.
        - **Experience**: List relevant work experience in reverse chronological order. Each job entry should include:
            - **Job Title**: Clearly state the role.
            - **Company Name**: Include the name of the organization.
            - **Dates of Employment**: Specify the duration of the job.
            - **Key Responsibilities and Achievements**: Use bullet points to outline key responsibilities, focusing on achievements and impact. Use quantifiable metrics (e.g., increased efficiency by 20%, led a team of 10 engineers, reduced costs by 15%) to demonstrate success.
    3. **Skills**: List technical and soft skills relevant to the job description. Emphasize skills that align with FAANG/MAANG expectations, such as problem-solving, leadership, teamwork, programming languages, frameworks, tools, and methodologies.
    4. **Education**: Include educational background, with details such as the degree, institution, and any honors or relevant coursework.
    5. **Certifications and Awards**: Mention any certifications, awards, or recognitions that demonstrate expertise and achievements.
    6. **Projects and Publications**: If applicable, include a section for significant projects or publications that showcase the candidate’s expertise and contributions to the field.
    7. **Keywords Optimization**: Integrate relevant keywords from the job description to ensure the resume is optimized for Applicant Tracking Systems (ATS).
    8. **Creativity Level**: Apply a ${creativityLevel} level of creativity to enhance the resume’s presentation while maintaining a professional and industry-standard format.
    9. **Word Limit**: Ensure the resume does not exceed ${wordLimit} words, focusing on clarity and conciseness.
    10. **Exclude Irrelevant Information**: Only include details that are directly relevant to the job description and the candidate's qualifications. Exclude personal information such as marital status, age, or photos unless explicitly required.
    
    **Visual and Formatting Guidelines (using HTML and CSS)**:
    - Use a clean and modern layout with plenty of white space for readability.
    - Employ industry-recommended fonts such as 'Helvetica', 'Arial', or 'Roboto' for a clean and professional look.
    - Use font sizes of 10-12pt for main text, 14-16pt for section headers, and 18-22pt for the candidate's name.
    - Include subtle use of color (e.g., #2A2A2A for text, #0073e6 for section headers) to differentiate sections and make important elements stand out.
    - Ensure consistency in the alignment of text and spacing. Use bold or italics sparingly to emphasize important information.
    - Include links to the candidate's LinkedIn and portfolio using anchor tags.
    - Use lists for skills, responsibilities, and achievements to ensure clarity and easy scanning.
    - Implement proper indentation and spacing in the HTML to ensure the resume is neat and organized.

    **Output Requirements:**
    - Provide ${numberOfResults} variations of the resume.
    - Each version should adhere to the instructions above and be ready for submission to companies in the technology industry.

    **Examples of Strong Resume Statements**:
    - "Led a cross-functional team of 15 engineers, improving software deployment efficiency by 30%."
    - "Implemented a machine learning model that reduced processing time by 25%, resulting in a $1M annual cost saving."
    - "Designed and launched a customer feedback system, increasing user engagement by 40%."

    Please generate the resume(s) with these guidelines in mind to ensure alignment with FAANG/MAANG hiring standards. The resume should be output as well-formatted HTML with inline CSS to maintain consistency and professional presentation.
    strictly only the resume no additional text or character of any sort before or after it.
    `;
},

coverLetterPrompt:function generateCoverLetterPrompt({
  language,
  tone,
  name,
  jobPosition,
  experience,
  jobDescription,
  wordLimit,
  numberOfResults,
  creativityLevel
}: ICoverLetterPromptProps): string {
  return `
    I need to create a highly optimized and professional cover letter for a job applicant targeting roles at top-tier technology companies like FAANG and MAANG. Please use the following guidelines and details to craft the cover letter:

    **User-Provided Information:**
    - **Applicant's Name:** ${name}
    - **Target Job Position:** ${jobPosition}
    - **Years of Experience:** ${experience}
    - **Job Description:** ${jobDescription}

    **Specific Instructions:**
    1. **Language and Tone**: The cover letter should be written in ${language} with a ${tone} tone. It should be polished, articulate, and reflect the professionalism expected in top-tier technology companies.
    2. **Structure and Format**:
        - **Header**: Include the applicant's name, email, phone number, LinkedIn profile, and any relevant portfolio links. Align this section to the left.
        - **Introduction**: Begin with a compelling opening paragraph that mentions the job position, how the applicant found out about the job, and a brief summary of why they are a great fit for the role.
        - **Body**: Include 2-3 paragraphs detailing:
            - **Relevant Experience**: Highlight key achievements and responsibilities that align with the job description. Use quantifiable metrics (e.g., "Increased team productivity by 25% by implementing new workflow tools").
            - **Skills and Expertise**: Emphasize technical and soft skills that are highly relevant to the position. Showcase leadership, problem-solving, and teamwork skills, especially those that are valued by FAANG/MAANG companies.
            - **Motivation**: Explain why the applicant is interested in this specific role and company. Show a genuine understanding of the company's mission, values, and industry impact.
        - **Closing**: Conclude with a strong closing statement that reiterates the applicant's enthusiasm for the role and mentions the next steps (e.g., availability for an interview). Use a formal sign-off, like "Sincerely" or "Best regards".
    3. **Keywords Optimization**: Integrate relevant keywords from the job description to ensure the cover letter is optimized for Applicant Tracking Systems (ATS).
    4. **Creativity Level**: Apply a ${creativityLevel} level of creativity to enhance the letter’s appeal while maintaining a professional and industry-standard format.
    5. **Word Limit**: Ensure the cover letter does not exceed ${wordLimit} words, focusing on clarity and conciseness.
    6. **Exclude Irrelevant Information**: Only include details that are directly relevant to the job description and the applicant's qualifications. Exclude personal information such as marital status, age, or photos unless explicitly required.

    **Visual and Formatting Guidelines (using HTML and CSS)**:
    - Use a clean, single-column layout with plenty of white space for readability.
    - Employ industry-recommended fonts such as 'Helvetica', 'Arial', or 'Roboto' for a clean and professional look.
    - Use font sizes of 10-12pt for main text, 14-16pt for headings, and 18-22pt for the applicant’s name.
    - Include subtle use of color (e.g., #2A2A2A for text, #0073e6 for headings) to differentiate sections and make important elements stand out.
    - Ensure consistency in text alignment, spacing, and indentation. Use bold or italics sparingly to emphasize important information.
    - Use HTML elements like paragraphs (<p>), headers (<h1>, <h2>), and lists (<ul>, <li>) for clarity and structure.
    - Include links to the applicant's LinkedIn and portfolio using anchor tags.
    - Make sure the cover letter is output as well-formatted HTML with inline CSS to maintain consistency and professional presentation.

    **Output Requirements:**
    - Provide ${numberOfResults} variations of the cover letter.
    - Each version should adhere to the instructions above and be ready for submission to companies in the technology industry.

    **Examples of Strong Cover Letter Statements**:
    - "In my previous role as a Software Engineer at Tech Innovators Inc., I led a team of 10 engineers in developing a customer feedback system that increased user engagement by 40%."
    - "My passion for innovative technology and my experience in developing scalable web applications make me an ideal candidate for the Senior Software Developer position at your esteemed company."
    - "I am particularly drawn to your company's mission of leveraging technology to enhance user experience and am excited about the opportunity to contribute to your ongoing success."

    Please generate the cover letter(s) with these guidelines in mind to ensure alignment with FAANG/MAANG hiring standards. The cover letter should be output as well-formatted HTML with inline CSS for a professional presentation.
        strictly only the resume no additional text or character of any sort before or after it.

    `;
}



};

export default prompts;

