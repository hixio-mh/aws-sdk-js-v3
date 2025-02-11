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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { VolumeAttachment } from "../models/models_0";
import { DetachVolumeRequest } from "../models/models_4";
import { deserializeAws_ec2DetachVolumeCommand, serializeAws_ec2DetachVolumeCommand } from "../protocols/Aws_ec2";

export interface DetachVolumeCommandInput extends DetachVolumeRequest {}
export interface DetachVolumeCommandOutput extends VolumeAttachment, __MetadataBearer {}

/**
 * <p>Detaches an EBS volume from an instance. Make sure to unmount any file systems on the
 *       device within your operating system before detaching the volume. Failure to do so can result
 *       in the volume becoming stuck in the <code>busy</code> state while detaching. If this happens,
 *       detachment can be delayed indefinitely until you unmount the volume, force detachment, reboot
 *       the instance, or all three. If an EBS volume is the root device of an instance, it can't be
 *       detached while the instance is running. To detach the root volume, stop the instance
 *       first.</p>
 *          <p>When a volume with an Amazon Web Services Marketplace product code is detached from an instance, the
 *       product code is no longer associated with the instance.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html">Detach an Amazon EBS volume</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DetachVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachVolumeCommandInput} for command's `input` shape.
 * @see {@link DetachVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DetachVolumeCommand extends $Command<
  DetachVolumeCommandInput,
  DetachVolumeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachVolumeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachVolumeCommandInput, DetachVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DetachVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachVolumeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VolumeAttachment.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DetachVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachVolumeCommandOutput> {
    return deserializeAws_ec2DetachVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
