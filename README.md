# Personal Web Portfolio 🧑🏼‍💻💼📝

This is my personal web portfolio, where I showcase my skills, projects, and professional information. It serves as a central hub for anyone interested in learning more about my work.

Previously, I built my portfolio using **Vanilla JavaScript**, HTML5, and CSS, but I am now updating and improving it with **React** and **Tailwind CSS** for a more modern, scalable, and maintainable approach.

## Features

- **Light/Dark Mode Toggle** 💡 / 🕶️  
  Switch between light and dark themes.

**Navigation Menu** 🧭  
Easy-to-use navigation for smooth site browsing.

- **Smooth Transitions and Animations** ✨  
  Enjoy a modern, interactive user experience with smooth transitions and animations.

- **Version Upgrade**  
  Transitioning from a **Vanilla JS** version to a more robust and scalable **React + Tailwind CSS** setup.

## Tech Stack

- **React**  
  A JavaScript library for building user interfaces.

- **Tailwind CSS**  
  A utility-first CSS framework to style the application.

- **AWS Amplify, Lambda & SES**  
  Cloud computing services for backend functionality.

- **TypeScript**  
  For type safety and better developer experience.

- **Node.js**  
  For server-side scripting.

## Setup

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. Start development server:
   ```bash
   npm start
   ```

## Deployment to AWS

### Prerequisites
- AWS Account with S3, CloudFront, and Lambda configured
- GitHub repository with secrets configured

### AWS Setup
1. **S3 Bucket**: Create a bucket for static hosting
2. **CloudFront Distribution**: Point to your S3 bucket
3. **Lambda Function**: Deploy the contact form Lambda (from `/lambda/index.mjs`)
4. **API Gateway**: Create API Gateway for Lambda integration

### GitHub Secrets Required
Add these secrets to your GitHub repository:

```bash
# AWS Credentials
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key

# S3 & CloudFront
S3_BUCKET_NAME=your-s3-bucket-name
CLOUDFRONT_DISTRIBUTION_ID=your_cloudfront_distribution_id

# Environment Variables
REACT_APP_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
REACT_APP_API_URL=https://your-api-gateway-url.com/prod/sendEmail
```

### Deployment Process
1. **Push to main branch**: Automatic deployment via GitHub Actions
2. **Manual deployment**: Run `npm run build && npm run deploy`

### Migration from Vanilla JS
If migrating from your existing Vanilla JS portfolio:

1. **Backup current site** (optional but recommended)
2. **Update DNS**: Point `sandrosousaweb.com` to new CloudFront distribution
3. **Test thoroughly**: Verify all functionality works
4. **Update Lambda**: Deploy the new Lambda function with reCAPTCHA verification
5. **Monitor**: Check CloudWatch logs for any issues

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI components
│   ├── molecules/      # Complex components (contact form, etc.)
│   └── contexts/       # React contexts
├── assets/             # Images and icons
└── App.tsx            # Main app component
```

## Security Features

- ✅ **reCAPTCHA v2** - Prevents automated submissions
- ✅ **Input sanitization** - XSS and injection prevention
- ✅ **Rate limiting** - 1 email per hour per user
- ✅ **CORS protection** - Restricted to allowed domains
- ✅ **Email header injection prevention** - Sanitized email headers
- ✅ **Environment variables** - Secure configuration management
