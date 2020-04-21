import Service from "../service";
import Client from "../client";
import PlatformsAccount, { AccountTypesEnum } from "./resource/platforms/account";
import PlatformsFund from "./resource/platforms/fund";
import PlatformsHostedOnboardingPage from "./resource/platforms/hop";
declare type AccountType = AccountTypesEnum.Accounts;
declare type VerificationType = AccountTypesEnum.Verification;
declare type AccountHoldersType = AccountTypesEnum.AccountHolders;
declare type AccountsAccount = PlatformsAccount<AccountType>;
declare type AccountsVerification = PlatformsAccount<VerificationType>;
declare type AccountsAccountHolders = PlatformsAccount<AccountHoldersType>;
declare type PlatformsTypes = AccountsAccount | AccountsVerification | AccountsAccountHolders | PlatformsFund | PlatformsHostedOnboardingPage;
declare class Platforms extends Service {
    private readonly _closeAccount;
    private readonly _updateAccount;
    private readonly _createAccount;
    private readonly _uploadDocument;
    private readonly _getUploadedDocuments;
    private readonly _deleteBankAccounts;
    private readonly _deletePayoutMethods;
    private readonly _deleteShareholders;
    private readonly _checkAccountHolder;
    private readonly _createAccountHolder;
    private readonly _getAccountHolder;
    private readonly _updateAccountHolder;
    private readonly _suspendAccountHolder;
    private readonly _unSuspendAccountHolder;
    private readonly _closeAccountHolder;
    private readonly _accountHolderBalance;
    private readonly _accountHolderTransactionList;
    private readonly _payoutAccountHolder;
    private readonly _transferFunds;
    private readonly _refundFundsTransfer;
    private readonly _setupBeneficiary;
    private readonly _refundNotPaidOutTransfers;
    private readonly _getOnboardingUrl;
    private readonly _createNotificationConfiguration;
    private readonly _getNotificationConfiguration;
    private readonly _getNotificationConfigurationList;
    private readonly _testNotificationConfiguration;
    private readonly _updateNotificationConfiguration;
    private readonly _deleteNotificationConfiguration;
    constructor(client: Client);
    createRequest: <T extends PlatformsTypes, U, V>(service: T) => (request: U) => Promise<V>;
    get Account(): {
        accountHolders: {
            unSuspendAccountHolder: (request: IPlatformsAccount.UnSuspendAccountHolderRequest) => Promise<IPlatformsAccount.UnSuspendAccountHolderResponse>;
            getAccountHolder: (request: IPlatformsAccount.GetAccountHolderRequest) => Promise<IPlatformsAccount.GetAccountHolderResponse>;
            suspendAccountHolder: (request: IPlatformsAccount.SuspendAccountHolderRequest) => Promise<IPlatformsAccount.SuspendAccountHolderResponse>;
            createAccountHolder: (request: IPlatformsAccount.CreateAccountRequest) => Promise<IPlatformsAccount.CreateAccountHolderResponse>;
            updateAccountHolder: (request: IPlatformsAccount.UpdateAccountHolderRequest) => Promise<IPlatformsAccount.UpdateAccountHolderResponse>;
            closeAccountHolder: (request: IPlatformsAccount.CloseAccountHolderRequest) => Promise<IPlatformsAccount.CloseAccountHolderResponse>;
        };
        accounts: {
            closeAccount: (request: IPlatformsAccount.CloseAccountRequest) => Promise<IPlatformsAccount.CloseAccountResponse>;
            createAccount: (request: IPlatformsAccount.CreateAccountRequest) => Promise<IPlatformsAccount.CreateAccountResponse>;
            updateAccount: (request: IPlatformsAccount.UpdateAccountRequest) => Promise<IPlatformsAccount.UpdateAccountHolderResponse>;
        };
        verification: {
            getUploadedDocuments: (request: IPlatformsAccount.GetUploadedDocumentsRequest) => Promise<IPlatformsAccount.GetUploadedDocumentsResponse>;
            deleteShareholders: (request: IPlatformsAccount.DeleteShareholderRequest) => Promise<IPlatformsAccount.GenericResponse>;
            deleteBankAccounts: (request: IPlatformsAccount.DeleteBankAccountRequest) => Promise<IPlatformsAccount.GenericResponse>;
            deletePayoutMethods: (request: IPlatformsAccount.DeletePayoutMethodRequest) => Promise<IPlatformsAccount.GenericResponse>;
            checkAccountHolder: (request: IPlatformsAccount.PerformVerificationRequest) => Promise<IPlatformsAccount.GenericResponse>;
            uploadDocument: (request: IPlatformsAccount.UploadDocumentRequest) => Promise<IPlatformsAccount.GetUploadedDocumentsResponse>;
        };
    };
    get Fund(): {
        refundNotPaidOutTransfers: (request: IPlatformsFund.RefundNotPaidOutTransfersRequest) => Promise<IPlatformsFund.RefundNotPaidOutTransfersResponse>;
        accountHolderTransactionList: (request: IPlatformsFund.AccountHolderTransactionListRequest) => Promise<IPlatformsFund.AccountHolderTransactionListResponse>;
        setupBeneficiary: (request: IPlatformsFund.SetupBeneficiaryRequest) => Promise<IPlatformsFund.SetupBeneficiaryResponse>;
        transferFunds: (request: IPlatformsFund.TransferFundsRequest) => Promise<IPlatformsFund.TransferFundsResponse>;
        refundFundsTransfer: (request: IPlatformsFund.RefundFundsTransferRequest) => Promise<IPlatformsFund.RefundFundsTransferResponse>;
        payoutAccountHolder: (request: IPlatformsFund.PayoutAccountHolderRequest) => Promise<IPlatformsFund.PayoutAccountHolderResponse>;
        accountHolderBalance: (request: IPlatformsFund.AccountHolderBalanceRequest) => Promise<IPlatformsFund.AccountHolderBalanceResponse>;
    };
    get HostedOnboardingPage(): {
        getOnboardingUrl: (request: IPlatformsHostedOnboardingPage.GetOnboardingUrlRequest) => Promise<IPlatformsHostedOnboardingPage.GetOnboardingUrlResponse>;
    };
    get NotificationConfiguration(): {
        createNotificationConfiguration: (request: IPlatformsNotificationConfiguration.CreateNotificationConfigurationRequest) => Promise<IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>;
        updateNotificationConfiguration: (request: IPlatformsNotificationConfiguration.UpdateNotificationConfigurationRequest) => Promise<IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>;
        getNotificationConfiguration: (request: IPlatformsNotificationConfiguration.GetNotificationConfigurationRequest) => Promise<IPlatformsNotificationConfiguration.GetNotificationConfigurationResponse>;
        deleteNotificationConfiguration: (request: IPlatformsNotificationConfiguration.DeleteNotificationConfigurationRequest) => Promise<IPlatformsNotificationConfiguration.GenericResponse>;
        testNotificationConfiguration: (request: IPlatformsNotificationConfiguration.TestNotificationConfigurationRequest) => Promise<IPlatformsNotificationConfiguration.TestNotificationConfigurationResponse>;
        getNotificationConfigurationList: (request: null) => Promise<IPlatformsNotificationConfiguration.GetNotificationConfigurationListResponse>;
    };
}
export default Platforms;
