import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ConnextifyOAuth2Api implements ICredentialType {
	name = 'connextifyOAuth2Api';
	extends = ['oAuth2Api'];
	displayName = 'Connextify OAuth2 API';
	documentationUrl = 'https://docs.connextify.com';
	icon = { light: 'file:../nodes/connextify/logo.svg', dark: 'file:../nodes/connextify/logo-dark.svg' } as const;
	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'pkce',
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'hidden',
			default: 'n8n',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'hidden',
			typeOptions: {
				password: true,
			},
			default: '',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://connextify.com/mcp/oauth/authorize',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://connextify.com/mcp/oauth/token',
			required: true,
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: 'url:read url:create qr:read qr:create analytics:read webhook:manage',
			required: true,
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: 'app_id=n8n',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
	];
}
