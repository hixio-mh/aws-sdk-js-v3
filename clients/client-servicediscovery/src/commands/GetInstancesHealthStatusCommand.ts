import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GetInstancesHealthStatusRequest, GetInstancesHealthStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetInstancesHealthStatusCommand,
  serializeAws_json1_1GetInstancesHealthStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

export interface GetInstancesHealthStatusCommandInput extends GetInstancesHealthStatusRequest {}
export interface GetInstancesHealthStatusCommandOutput extends GetInstancesHealthStatusResponse, __MetadataBearer {}

/**
 * <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or
 *    more instances that are associated with a specified service.</p>
 *          <note>
 *             <p>There's a brief delay between when you register an instance and when the health status for the instance is
 *     available. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetInstancesHealthStatusCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetInstancesHealthStatusCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new GetInstancesHealthStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstancesHealthStatusCommandInput} for command's `input` shape.
 * @see {@link GetInstancesHealthStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetInstancesHealthStatusCommand extends $Command<
  GetInstancesHealthStatusCommandInput,
  GetInstancesHealthStatusCommandOutput,
  ServiceDiscoveryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInstancesHealthStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceDiscoveryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInstancesHealthStatusCommandInput, GetInstancesHealthStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceDiscoveryClient";
    const commandName = "GetInstancesHealthStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInstancesHealthStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInstancesHealthStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInstancesHealthStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInstancesHealthStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstancesHealthStatusCommandOutput> {
    return deserializeAws_json1_1GetInstancesHealthStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
