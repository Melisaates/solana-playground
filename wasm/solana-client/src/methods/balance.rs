use solana_sdk::{commitment_config::CommitmentConfig, pubkey::Pubkey};

use super::Context;
use crate::{ClientRequest, ClientResponse};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct GetBalanceRequest {
    pub pubkey: Pubkey,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub config: Option<CommitmentConfig>,
}

impl GetBalanceRequest {
    pub fn new(pubkey: Pubkey) -> Self {
        Self {
            pubkey,
            config: None,
        }
    }
    pub fn new_with_config(pubkey: Pubkey, config: CommitmentConfig) -> Self {
        Self {
            pubkey,
            config: Some(config),
        }
    }
}

impl Into<serde_json::Value> for GetBalanceRequest {
    fn into(self) -> serde_json::Value {
        match self.config {
            Some(config) => serde_json::json!([self.pubkey.to_string(), config]),
            None => serde_json::json!([self.pubkey.to_string()]),
        }
    }
}

impl Into<ClientRequest> for GetBalanceRequest {
    fn into(self) -> ClientRequest {
        let mut request = ClientRequest::new("getBalance");
        let params = self.into();

        request.params(params).clone()
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBalanceResponse {
    pub context: Context,
    pub value: u64,
}

impl From<ClientResponse> for GetBalanceResponse {
    fn from(response: ClientResponse) -> Self {
        serde_json::from_value(response.result).unwrap()
    }
}
