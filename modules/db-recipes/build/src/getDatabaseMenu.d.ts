import { ModelInfo } from "code-types";
export declare const getDbModelsForSensibleProject: () => void;
/**
 *
 * Finds all relevant Db models to show in the menu
 *
 * - for a bundleId, it gets all models from the bundleSummary
 * - for a sensible project (bundled) gets all models from the packages
 * - for the main project, gets all models from sdk-db directly
 *
 * TODO: NB: the first and the second are not the same, so this needs to be cleaned up.
 */
export declare const getDatabaseMenu: (config: {
    bundleId?: string | undefined;
}) => Promise<{
    menu: ModelInfo[];
}>;
//# sourceMappingURL=getDatabaseMenu.d.ts.map