        <OrDivider>
          <span>or</span>
        </OrDivider>
        
        <SocialButtonsContainer>
          <SocialIconButton onClick={() => handleSocialLogin('google')} aria-label="Login with Google">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.1816 8.18182H10V12.0455H15.4403C14.9267 14.5 12.7635 15.9091 10 15.9091C6.68466 15.9091 4.09091 13.3153 4.09091 10C4.09091 6.68466 6.68466 4.09091 10 4.09091C11.4858 4.09091 12.809 4.61932 13.809 5.49432L16.7108 2.59261C15.2164 0.984091 12.6073 0 10 0C4.47841 0 0 4.47841 0 10C0 15.5216 4.47841 20 10 20C15.0801 20 19.0914 16.5682 19.0914 10C19.0914 9.40909 19.0449 8.79545 18.9316 8.18182H18.1816Z" fill="#4285F4"/>
              <path d="M1.74658 5.33182L5.10022 7.75455C5.96044 5.61818 7.82862 4.09091 9.99999 4.09091C11.4858 4.09091 12.809 4.61932 13.809 5.49432L16.7108 2.59261C15.2164 0.984091 12.6073 0 9.99999 0C6.37272 0 3.24226 2.14545 1.74658 5.33182Z" fill="#EA4335"/>
              <path d="M10.0002 20C12.6075 20 15.1873 19.0479 16.6217 17.508L13.4549 14.75C12.4961 15.4466 11.307 15.9094 10.0002 15.9094C7.25582 15.9094 5.07749 14.5173 4.44766 12.5002L1.09863 15.1611C2.57271 18.2647 5.71226 20 10.0002 20Z" fill="#34A853"/>
              <path d="M4.44761 12.5C4.25556 11.8807 4.09081 11.2046 4.09081 10.5C4.09081 9.79545 4.25556 9.11932 4.44761 8.5L1.09858 5.83864C0.400966 7.23636 -0.000458264 8.81818 -0.000458264 10.5C-0.000458264 12.1818 0.400966 13.7636 1.09858 15.1614L4.44761 12.5Z" fill="#FBBC05"/>
            </svg>
          </SocialIconButton>
          <SocialIconButton onClick={() => handleSocialLogin('facebook')} aria-label="Login with Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 320 512" fill="#1877F2">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
            </svg>
          </SocialIconButton>
          <SocialIconButton onClick={() => handleSocialLogin('twitter')} aria-label="Login with Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </SocialIconButton>
          <SocialIconButton onClick={() => handleSocialLogin('linkedin')} aria-label="Login with LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="#0A66C2">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
            </svg>
          </SocialIconButton>
        </SocialButtonsContainer> 