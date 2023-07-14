import {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.194.0/http/http_status.ts";
import type { Context } from "https://deno.land/x/hono@v3.3.0/mod.ts";

// 规范成功请求
export function useFailResponse(
  c: Context,
  data = c.error?.message,
  status = c.res.status,
) {
  return c.json({
    msg: "fail",
    data: data ?? STATUS_TEXT[c.res.status as Status] ?? c.res.statusText,
  }, status);
}

// 规范失败请求
// deno-lint-ignore no-explicit-any
export function useSuccessResponse<T = any>(
  c: Context,
  data: T,
  status = c.res.status,
) {
  return c.json({
    msg: "success",
    data,
  }, status);
}