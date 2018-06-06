using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace WXYZ_Hotel.Common
{
    public class CustomDelegate : DelegatingHandler
    {
        public CustomDelegate()
        { }

        protected async override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            List<string> languages = new List<string>() { "tn-IN", "en-US", "en-GB" };
            IEnumerable<string> headers;
            request.Headers.TryGetValues("Accept-Language", out headers);
            HttpResponseMessage response;
            if (headers == null || !headers.Contains(headers.FirstOrDefault(), StringComparer.OrdinalIgnoreCase))
            {
                response = new HttpResponseMessage(HttpStatusCode.OK);
                response.Content = new StringContent("Language Should be Valid and Should Not Be Empty!");
            }
            else
            {
                response = await base.SendAsync(request, cancellationToken);
                response.Headers.Add("X-Powered-By", "Header From Custome Handler");
            }
            return response;
        }
    }
}