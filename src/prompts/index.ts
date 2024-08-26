// const prompts = {
//     learningPath: (topic: string, additionalData: { focusArea?: string; experienceLevel?: string }) => {
//         const { focusArea, experienceLevel } = additionalData;

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
  }
};

export default prompts;

