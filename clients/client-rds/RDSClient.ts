import {
  AccountAttributesMessage,
  AddRoleToDBClusterMessage,
  AddRoleToDBInstanceMessage,
  AddSourceIdentifierToSubscriptionMessage,
  AddTagsToResourceMessage,
  ApplyPendingMaintenanceActionMessage,
  AuthorizeDBSecurityGroupIngressMessage,
  BacktrackDBClusterMessage,
  CertificateMessage,
  CopyDBClusterParameterGroupMessage,
  CopyDBClusterSnapshotMessage,
  CopyDBParameterGroupMessage,
  CopyDBSnapshotMessage,
  CopyOptionGroupMessage,
  CreateCustomAvailabilityZoneMessage,
  CreateDBClusterEndpointMessage,
  CreateDBClusterMessage,
  CreateDBClusterParameterGroupMessage,
  CreateDBClusterSnapshotMessage,
  CreateDBInstanceMessage,
  CreateDBInstanceReadReplicaMessage,
  CreateDBParameterGroupMessage,
  CreateDBProxyRequest,
  CreateDBProxyResponse,
  CreateDBSecurityGroupMessage,
  CreateDBSnapshotMessage,
  CreateDBSubnetGroupMessage,
  CreateEventSubscriptionMessage,
  CreateGlobalClusterMessage,
  CreateOptionGroupMessage,
  CustomAvailabilityZone,
  CustomAvailabilityZoneMessage,
  DBCluster,
  DBClusterBacktrack,
  DBClusterBacktrackMessage,
  DBClusterCapacityInfo,
  DBClusterEndpoint,
  DBClusterEndpointMessage,
  DBClusterMessage,
  DBClusterParameterGroup,
  DBClusterParameterGroupDetails,
  DBClusterParameterGroupNameMessage,
  DBClusterParameterGroupsMessage,
  DBClusterSnapshot,
  DBClusterSnapshotAttributesResult,
  DBClusterSnapshotMessage,
  DBEngineVersionMessage,
  DBInstance,
  DBInstanceAutomatedBackup,
  DBInstanceAutomatedBackupMessage,
  DBInstanceMessage,
  DBParameterGroup,
  DBParameterGroupDetails,
  DBParameterGroupNameMessage,
  DBParameterGroupsMessage,
  DBSecurityGroup,
  DBSecurityGroupMessage,
  DBSnapshot,
  DBSnapshotAttributesResult,
  DBSnapshotMessage,
  DBSubnetGroup,
  DBSubnetGroupMessage,
  DeleteCustomAvailabilityZoneMessage,
  DeleteDBClusterEndpointMessage,
  DeleteDBClusterMessage,
  DeleteDBClusterParameterGroupMessage,
  DeleteDBClusterSnapshotMessage,
  DeleteDBInstanceAutomatedBackupMessage,
  DeleteDBInstanceMessage,
  DeleteDBParameterGroupMessage,
  DeleteDBProxyRequest,
  DeleteDBProxyResponse,
  DeleteDBSecurityGroupMessage,
  DeleteDBSnapshotMessage,
  DeleteDBSubnetGroupMessage,
  DeleteEventSubscriptionMessage,
  DeleteGlobalClusterMessage,
  DeleteInstallationMediaMessage,
  DeleteOptionGroupMessage,
  DeregisterDBProxyTargetsRequest,
  DeregisterDBProxyTargetsResponse,
  DescribeAccountAttributesMessage,
  DescribeCertificatesMessage,
  DescribeCustomAvailabilityZonesMessage,
  DescribeDBClusterBacktracksMessage,
  DescribeDBClusterEndpointsMessage,
  DescribeDBClusterParameterGroupsMessage,
  DescribeDBClusterParametersMessage,
  DescribeDBClusterSnapshotAttributesMessage,
  DescribeDBClusterSnapshotsMessage,
  DescribeDBClustersMessage,
  DescribeDBEngineVersionsMessage,
  DescribeDBInstanceAutomatedBackupsMessage,
  DescribeDBInstancesMessage,
  DescribeDBLogFilesMessage,
  DescribeDBLogFilesResponse,
  DescribeDBParameterGroupsMessage,
  DescribeDBParametersMessage,
  DescribeDBProxiesRequest,
  DescribeDBProxiesResponse,
  DescribeDBProxyTargetGroupsRequest,
  DescribeDBProxyTargetGroupsResponse,
  DescribeDBProxyTargetsRequest,
  DescribeDBProxyTargetsResponse,
  DescribeDBSecurityGroupsMessage,
  DescribeDBSnapshotAttributesMessage,
  DescribeDBSnapshotsMessage,
  DescribeDBSubnetGroupsMessage,
  DescribeEngineDefaultClusterParametersMessage,
  DescribeEngineDefaultParametersMessage,
  DescribeEventCategoriesMessage,
  DescribeEventSubscriptionsMessage,
  DescribeEventsMessage,
  DescribeGlobalClustersMessage,
  DescribeInstallationMediaMessage,
  DescribeOptionGroupOptionsMessage,
  DescribeOptionGroupsMessage,
  DescribeOrderableDBInstanceOptionsMessage,
  DescribePendingMaintenanceActionsMessage,
  DescribeReservedDBInstancesMessage,
  DescribeReservedDBInstancesOfferingsMessage,
  DescribeSourceRegionsMessage,
  DescribeValidDBInstanceModificationsMessage,
  DownloadDBLogFilePortionDetails,
  DownloadDBLogFilePortionMessage,
  EngineDefaults,
  EventCategoriesMessage,
  EventSubscription,
  EventSubscriptionsMessage,
  EventsMessage,
  FailoverDBClusterMessage,
  GlobalCluster,
  GlobalClustersMessage,
  ImportInstallationMediaMessage,
  InstallationMedia,
  InstallationMediaMessage,
  ListTagsForResourceMessage,
  ModifyCurrentDBClusterCapacityMessage,
  ModifyDBClusterEndpointMessage,
  ModifyDBClusterMessage,
  ModifyDBClusterParameterGroupMessage,
  ModifyDBClusterSnapshotAttributeMessage,
  ModifyDBInstanceMessage,
  ModifyDBParameterGroupMessage,
  ModifyDBProxyRequest,
  ModifyDBProxyResponse,
  ModifyDBProxyTargetGroupRequest,
  ModifyDBProxyTargetGroupResponse,
  ModifyDBSnapshotAttributeMessage,
  ModifyDBSnapshotMessage,
  ModifyDBSubnetGroupMessage,
  ModifyEventSubscriptionMessage,
  ModifyGlobalClusterMessage,
  ModifyOptionGroupMessage,
  OptionGroup,
  OptionGroupOptionsMessage,
  OptionGroups,
  OrderableDBInstanceOptionsMessage,
  PendingMaintenanceActionsMessage,
  PromoteReadReplicaDBClusterMessage,
  PromoteReadReplicaMessage,
  PurchaseReservedDBInstancesOfferingMessage,
  RebootDBInstanceMessage,
  RegisterDBProxyTargetsRequest,
  RegisterDBProxyTargetsResponse,
  RemoveFromGlobalClusterMessage,
  RemoveRoleFromDBClusterMessage,
  RemoveRoleFromDBInstanceMessage,
  RemoveSourceIdentifierFromSubscriptionMessage,
  RemoveTagsFromResourceMessage,
  ReservedDBInstance,
  ReservedDBInstanceMessage,
  ReservedDBInstancesOfferingMessage,
  ResetDBClusterParameterGroupMessage,
  ResetDBParameterGroupMessage,
  ResourcePendingMaintenanceActions,
  RestoreDBClusterFromS3Message,
  RestoreDBClusterFromSnapshotMessage,
  RestoreDBClusterToPointInTimeMessage,
  RestoreDBInstanceFromDBSnapshotMessage,
  RestoreDBInstanceFromS3Message,
  RestoreDBInstanceToPointInTimeMessage,
  RevokeDBSecurityGroupIngressMessage,
  SourceRegionMessage,
  StartActivityStreamRequest,
  StartActivityStreamResponse,
  StartDBClusterMessage,
  StartDBInstanceMessage,
  StopActivityStreamRequest,
  StopActivityStreamResponse,
  StopDBClusterMessage,
  StopDBInstanceMessage,
  TagListMessage,
  ValidDBInstanceModificationsMessage
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddRoleToDBClusterMessage
  | AddRoleToDBInstanceMessage
  | AddSourceIdentifierToSubscriptionMessage
  | AddTagsToResourceMessage
  | ApplyPendingMaintenanceActionMessage
  | AuthorizeDBSecurityGroupIngressMessage
  | BacktrackDBClusterMessage
  | CopyDBClusterParameterGroupMessage
  | CopyDBClusterSnapshotMessage
  | CopyDBParameterGroupMessage
  | CopyDBSnapshotMessage
  | CopyOptionGroupMessage
  | CreateCustomAvailabilityZoneMessage
  | CreateDBClusterEndpointMessage
  | CreateDBClusterMessage
  | CreateDBClusterParameterGroupMessage
  | CreateDBClusterSnapshotMessage
  | CreateDBInstanceMessage
  | CreateDBInstanceReadReplicaMessage
  | CreateDBParameterGroupMessage
  | CreateDBProxyRequest
  | CreateDBSecurityGroupMessage
  | CreateDBSnapshotMessage
  | CreateDBSubnetGroupMessage
  | CreateEventSubscriptionMessage
  | CreateGlobalClusterMessage
  | CreateOptionGroupMessage
  | DeleteCustomAvailabilityZoneMessage
  | DeleteDBClusterEndpointMessage
  | DeleteDBClusterMessage
  | DeleteDBClusterParameterGroupMessage
  | DeleteDBClusterSnapshotMessage
  | DeleteDBInstanceAutomatedBackupMessage
  | DeleteDBInstanceMessage
  | DeleteDBParameterGroupMessage
  | DeleteDBProxyRequest
  | DeleteDBSecurityGroupMessage
  | DeleteDBSnapshotMessage
  | DeleteDBSubnetGroupMessage
  | DeleteEventSubscriptionMessage
  | DeleteGlobalClusterMessage
  | DeleteInstallationMediaMessage
  | DeleteOptionGroupMessage
  | DeregisterDBProxyTargetsRequest
  | DescribeAccountAttributesMessage
  | DescribeCertificatesMessage
  | DescribeCustomAvailabilityZonesMessage
  | DescribeDBClusterBacktracksMessage
  | DescribeDBClusterEndpointsMessage
  | DescribeDBClusterParameterGroupsMessage
  | DescribeDBClusterParametersMessage
  | DescribeDBClusterSnapshotAttributesMessage
  | DescribeDBClusterSnapshotsMessage
  | DescribeDBClustersMessage
  | DescribeDBEngineVersionsMessage
  | DescribeDBInstanceAutomatedBackupsMessage
  | DescribeDBInstancesMessage
  | DescribeDBLogFilesMessage
  | DescribeDBParameterGroupsMessage
  | DescribeDBParametersMessage
  | DescribeDBProxiesRequest
  | DescribeDBProxyTargetGroupsRequest
  | DescribeDBProxyTargetsRequest
  | DescribeDBSecurityGroupsMessage
  | DescribeDBSnapshotAttributesMessage
  | DescribeDBSnapshotsMessage
  | DescribeDBSubnetGroupsMessage
  | DescribeEngineDefaultClusterParametersMessage
  | DescribeEngineDefaultParametersMessage
  | DescribeEventCategoriesMessage
  | DescribeEventSubscriptionsMessage
  | DescribeEventsMessage
  | DescribeGlobalClustersMessage
  | DescribeInstallationMediaMessage
  | DescribeOptionGroupOptionsMessage
  | DescribeOptionGroupsMessage
  | DescribeOrderableDBInstanceOptionsMessage
  | DescribePendingMaintenanceActionsMessage
  | DescribeReservedDBInstancesMessage
  | DescribeReservedDBInstancesOfferingsMessage
  | DescribeSourceRegionsMessage
  | DescribeValidDBInstanceModificationsMessage
  | DownloadDBLogFilePortionMessage
  | FailoverDBClusterMessage
  | ImportInstallationMediaMessage
  | ListTagsForResourceMessage
  | ModifyCurrentDBClusterCapacityMessage
  | ModifyDBClusterEndpointMessage
  | ModifyDBClusterMessage
  | ModifyDBClusterParameterGroupMessage
  | ModifyDBClusterSnapshotAttributeMessage
  | ModifyDBInstanceMessage
  | ModifyDBParameterGroupMessage
  | ModifyDBProxyRequest
  | ModifyDBProxyTargetGroupRequest
  | ModifyDBSnapshotAttributeMessage
  | ModifyDBSnapshotMessage
  | ModifyDBSubnetGroupMessage
  | ModifyEventSubscriptionMessage
  | ModifyGlobalClusterMessage
  | ModifyOptionGroupMessage
  | PromoteReadReplicaDBClusterMessage
  | PromoteReadReplicaMessage
  | PurchaseReservedDBInstancesOfferingMessage
  | RebootDBInstanceMessage
  | RegisterDBProxyTargetsRequest
  | RemoveFromGlobalClusterMessage
  | RemoveRoleFromDBClusterMessage
  | RemoveRoleFromDBInstanceMessage
  | RemoveSourceIdentifierFromSubscriptionMessage
  | RemoveTagsFromResourceMessage
  | ResetDBClusterParameterGroupMessage
  | ResetDBParameterGroupMessage
  | RestoreDBClusterFromS3Message
  | RestoreDBClusterFromSnapshotMessage
  | RestoreDBClusterToPointInTimeMessage
  | RestoreDBInstanceFromDBSnapshotMessage
  | RestoreDBInstanceFromS3Message
  | RestoreDBInstanceToPointInTimeMessage
  | RevokeDBSecurityGroupIngressMessage
  | StartActivityStreamRequest
  | StartDBClusterMessage
  | StartDBInstanceMessage
  | StopActivityStreamRequest
  | StopDBClusterMessage
  | StopDBInstanceMessage;

export type ServiceOutputTypes =
  | __MetadataBearer
  | AccountAttributesMessage
  | CertificateMessage
  | CreateDBProxyResponse
  | CustomAvailabilityZone
  | CustomAvailabilityZone
  | CustomAvailabilityZoneMessage
  | DBCluster
  | DBCluster
  | DBCluster
  | DBCluster
  | DBCluster
  | DBCluster
  | DBCluster
  | DBCluster
  | DBCluster
  | DBCluster
  | DBClusterBacktrack
  | DBClusterBacktrackMessage
  | DBClusterCapacityInfo
  | DBClusterEndpoint
  | DBClusterEndpoint
  | DBClusterEndpoint
  | DBClusterEndpointMessage
  | DBClusterMessage
  | DBClusterParameterGroup
  | DBClusterParameterGroup
  | DBClusterParameterGroupDetails
  | DBClusterParameterGroupNameMessage
  | DBClusterParameterGroupNameMessage
  | DBClusterParameterGroupsMessage
  | DBClusterSnapshot
  | DBClusterSnapshot
  | DBClusterSnapshot
  | DBClusterSnapshotAttributesResult
  | DBClusterSnapshotAttributesResult
  | DBClusterSnapshotMessage
  | DBEngineVersionMessage
  | DBInstance
  | DBInstance
  | DBInstance
  | DBInstance
  | DBInstance
  | DBInstance
  | DBInstance
  | DBInstance
  | DBInstance
  | DBInstance
  | DBInstance
  | DBInstanceAutomatedBackup
  | DBInstanceAutomatedBackupMessage
  | DBInstanceMessage
  | DBParameterGroup
  | DBParameterGroup
  | DBParameterGroupDetails
  | DBParameterGroupNameMessage
  | DBParameterGroupNameMessage
  | DBParameterGroupsMessage
  | DBSecurityGroup
  | DBSecurityGroup
  | DBSecurityGroup
  | DBSecurityGroupMessage
  | DBSnapshot
  | DBSnapshot
  | DBSnapshot
  | DBSnapshot
  | DBSnapshotAttributesResult
  | DBSnapshotAttributesResult
  | DBSnapshotMessage
  | DBSubnetGroup
  | DBSubnetGroup
  | DBSubnetGroupMessage
  | DeleteDBProxyResponse
  | DeregisterDBProxyTargetsResponse
  | DescribeDBLogFilesResponse
  | DescribeDBProxiesResponse
  | DescribeDBProxyTargetGroupsResponse
  | DescribeDBProxyTargetsResponse
  | DownloadDBLogFilePortionDetails
  | EngineDefaults
  | EngineDefaults
  | EventCategoriesMessage
  | EventSubscription
  | EventSubscription
  | EventSubscription
  | EventSubscription
  | EventSubscription
  | EventSubscriptionsMessage
  | EventsMessage
  | GlobalCluster
  | GlobalCluster
  | GlobalCluster
  | GlobalCluster
  | GlobalClustersMessage
  | InstallationMedia
  | InstallationMedia
  | InstallationMediaMessage
  | ModifyDBProxyResponse
  | ModifyDBProxyTargetGroupResponse
  | OptionGroup
  | OptionGroup
  | OptionGroup
  | OptionGroupOptionsMessage
  | OptionGroups
  | OrderableDBInstanceOptionsMessage
  | PendingMaintenanceActionsMessage
  | RegisterDBProxyTargetsResponse
  | ReservedDBInstance
  | ReservedDBInstanceMessage
  | ReservedDBInstancesOfferingMessage
  | ResourcePendingMaintenanceActions
  | SourceRegionMessage
  | StartActivityStreamResponse
  | StopActivityStreamResponse
  | TagListMessage
  | ValidDBInstanceModificationsMessage;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type RDSClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type RDSClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 *
 *          <fullname>Amazon Relational Database Service</fullname>
 *         <p> </p>
 *          <p>Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and
 *           scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational
 *           database and manages common database administration tasks, freeing up developers to focus on what makes their applications
 *           and businesses unique.</p>
 *          <p>Amazon RDS gives you access to the capabilities of a MySQL, MariaDB, PostgreSQL, Microsoft SQL Server,
 *           Oracle, or Amazon Aurora database server. These capabilities mean that the code, applications, and tools
 *           you already use today with your existing databases work with Amazon RDS without modification. Amazon RDS
 *           automatically backs up your database and maintains the database software that powers your DB instance. Amazon RDS
 *           is flexible: you can scale your DB instance's compute resources and storage capacity to meet your
 *           application's demand. As with all Amazon Web Services, there are no up-front investments, and you pay only for
 *           the resources you use.</p>
 *          <p>This interface reference for Amazon RDS contains documentation for a programming or command line interface
 *           you can use to manage Amazon RDS. Note that Amazon RDS is asynchronous, which means that some interfaces might
 *           require techniques such as polling or callback functions to determine when a command has been applied. In this
 *           reference, the parameter descriptions indicate whether a command is applied immediately, on the next instance reboot,
 *           or during the maintenance window. The reference structure is as follows, and we list following some related topics
 *           from the user guide.</p>
 *
 *          <p>
 *             <b>Amazon RDS API Reference</b>
 *          </p>
 *
 *          <ul>
 *             <li>
 *                <p>For the alphabetical list of API actions, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Operations.html">API Actions</a>.</p>
 *             </li>
 *             <li>
 *                <p>For the alphabetical list of data types, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_Types.html">Data Types</a>.</p>
 *             </li>
 *             <li>
 *                <p>For a list of common query parameters, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonParameters.html">Common Parameters</a>.</p>
 *             </li>
 *             <li>
 *                <p>For descriptions of the error codes, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <b>Amazon RDS User Guide</b>
 *          </p>
 *
 *          <ul>
 *             <li>
 *                <p>For a summary of the Amazon RDS interfaces, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Interfaces">Available RDS Interfaces</a>.</p>
 *             </li>
 *             <li>
 *                <p>For more information about how to use the Query API, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Using_the_Query_API.html">Using the Query API</a>.</p>
 *             </li>
 *          </ul>
 *
 *
 */
export class RDSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RDSClientResolvedConfig
> {
  readonly config: RDSClientResolvedConfig;

  constructor(configuration: RDSClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
